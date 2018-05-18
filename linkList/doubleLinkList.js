function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function doubleLinkList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.displayReverse = displayReverse;  // 反响显示链表
}

function find(item) {
    var currNode = this.head;
    while (currNode && currNode.element != item) {
        currNode = currNode.next;
    }
    if (currNode === null) {
        return false;
    } else {
        return currNode;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    if (currNode) {
        // item不是最后一个
        if (currNode.next) {
            newNode.next = currNode.next;
            currNode.next.previous = newNode; 
            newNode.previous = currNode;
            currNode.next = newNode;
        } else {
        // item是最后一个
            newNode.next = currNode.next;
            newNode.previous = currNode;
            currNode.next = newNode;
        }
    } else {
        print('Can not find node ' + item);
    }
}

function remove(item) {
    var currNode = this.find(item);
    if (currNode) {
        // item不是最后一个
        if (currNode.next) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        } else {
        // item是最后一个
            currNode.previous.next = null;
            currNode.previous = null;
        }
    } else {
        print('Can not find node ' + item);
    }
    
}

function display() {
    var currNode = this.head;
    while (currNode.next) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function findLast() {
    var currNode = this.head;
    while (currNode.next) {
        currNode = currNode.next;
    }
    return currNode;
}

function displayReverse() {
    var currNode = this.findLast();
    while (currNode.previous) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}


// test
var dllist = new doubleLinkList();
dllist.insert('aaa', 'head');
dllist.insert('bbb', 'aaa');
dllist.insert('ddd', 'bbb');
dllist.insert('ccc', 'bbb');
dllist.display();
dllist.displayReverse();

dllist.remove('bbb');
print('delete bbb');
dllist.display();
dllist.displayReverse();
