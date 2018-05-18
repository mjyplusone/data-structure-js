// JavaScript 中数组的主要问题是， 它们被实现成了对象， 与其他语言（比如 C++ 和 Java）的数组相比， 效率很低
// 链表 除了对数据的随机访问， 链表几乎可以用在任何可以使用一维数组的情况中。 如果需要随机访问， 数组仍然是更好的选择。

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.currNode = this.head;
    this.advance = advance;
    this.show = show;
}

function find(item) {
    var currNode = this.head;
    while (currNode && currNode.element !== item) {
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
        newNode.next = currNode.next;
        currNode.next = newNode;
    } else {
        print('Can not find node ' + item);
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while(currNode.next && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    if (currNode.next === null) {
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
    while (!(currNode.next === null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function advance(n) {
    while (n--) {
        if (this.currNode.next) {
            this.currNode = this.currNode.next;
        } else {
            print('Can not move ' + n + ' nodes');
            this.currNode = this.head;
            break;
        }
    }
}

function show() {
    print('current node is: ' + this.currNode.element);
}

// test
var llist = new LList();
llist.insert('aaa', 'head');
llist.insert('bbb', 'aaa');
llist.insert('ccc', 'bbb');
llist.insert('ddd', 'ccc');
llist.insert('ccc', 'bbb1');
llist.display();

llist.remove('bbb');
print('After delete: ');
llist.display();

llist.remove('ahaha');
print('After delete: ');
llist.display();

llist.show();
llist.advance(2);
llist.show();