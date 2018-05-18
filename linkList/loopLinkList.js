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

// test
var llist = new loopLinkList();
llist.insert('aaa', 'head');
llist.insert('bbb', 'aaa');
llist.insert('ddd', 'bbb');
llist.insert('ccc', 'bbb');
llist.insert('ccc', 'bbb1');
llist.display();

llist.remove('aaa');
print('After delete: aaa');
llist.display();

llist.remove('ahaha');
print('After delete: ahaha');
llist.display();