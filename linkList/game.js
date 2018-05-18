function Node(element) {
    this.element = element;
    this.next = null;
}

function loopLinkList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    if (item === 'head') return currNode;
    while (currNode.next && currNode.next.element !== 'head' && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    if (currNode.next.element === 'head') {
        return false;
    } else {
        return currNode.next;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    if (currNode) {
        newNode.next = currNode.next;
        currNode.next = newNode;
    } else {
        print('Can not find node ' + item);
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (currNode.next && currNode.next.element !== 'head' && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    if (currNode.next.element === 'head') {
        return false;
    } else {
        return currNode;
    }
}

function remove(item) {
    var preNode = this.findPrevious(item);
    if (preNode) {
        preNode.next = preNode.next.next;
    } else {
        print('Can not find node ' + item);
    }
}

function display() {
    var currNode = this.head;
    while (currNode.next && currNode.next.element !== 'head') {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}


// 循环链表应用:约瑟夫环
function circle(n, m) {
    var loopList = new loopLinkList();
    loopList.insert(1, 'head');
    for (var i = 1; i < n; i++) {
        loopList.insert(i + 1, i);
    }

    var currNode = loopList.find('head'); 
    var index = 0;   
    while (n >= m) {
        if (currNode.element === 'head') {
            currNode = currNode.next;
        }

        if ((index + 1) % m === 0) {
            index = 0;
            removeNode = currNode;
            currNode = currNode.next;
            loopList.remove(removeNode.element);
            n--;
            loopList.display();
            print('');
        } else {
            index++;
            currNode = currNode.next;
        }
    }
}

circle(10, 3);   // 4 10
circle(40, 3);   // 13 28