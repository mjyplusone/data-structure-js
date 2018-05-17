function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.clear = clear;
    this.find = find;
    this.toString = toString;  // 显示列表中元素
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.slice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

// front end prev next currPos 实现类的迭代器
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        this.pos--;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

// test
var names = new List();
names.append('aaa');
names.append('bbb');
names.append('ccc');
names.append('ddd');
console.log(names.toString());
names.remove('bbb');
console.log(names.toString());
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());


names.front();
names.next();
names.next();
console.log(names.currPos());

// 迭代器遍历列表
// for (names.front(); names.currPos() < names.length(); names.next()) {
//     console.log(names.getElement());
// }

// 以上书中介绍的方法有问题，next()到达listSize后不会再加，导致currPos永远小于length
// 修改如下:
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
    if (names.currPos() === names.length() - 1) break;
}

for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
    if (names.currPos() === 0) break;
}