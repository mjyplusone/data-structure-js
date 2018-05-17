// 队列:方块舞的舞伴分配问题

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;  // 队尾添加元素
    this.dequeue = dequeue;  // 队首删除元素
    this.front = front;  // 读取队首元素
    this.back = back;    // 读取队尾元素
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0){ 
        return true;
    } else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

// 方块舞的舞伴分配问题
dancerstr = 'F Allison McMillan\nM Frank Opitz\nM Mason McMillan\nM Clayton Ruff\nF Cheryl Ferenback\nM Raymond Williams\nF Jennifer Ingram\nM Bryan Frazer\nM David Durr\nM Danny Martin\nF Aurora Adney';

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

// 读取信息，分别创建females和males两个队列
function getDancers(males, females) {
    var names = dancerstr.split('\n');
    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(' ');
        var sex = dancer[0];
        var name = dancer[1] + ' ' + dancer[2];
        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

// 男性女性组成舞伴，并宣布配对结果
function dance(males, females) {
    print('The dance partners are: \n');
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        print('Female dancer is: ' + person.name);
        person = males.dequeue();
        print('Male dancer is: ' + person.name);
    }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    print(femaleDancers.front().name + ' is waiting to dance.');
}
if (!maleDancers.empty()) {
    print(maleDancers.front().name + ' is waiting to dance.');
}
if (femaleDancers.count() > 0) {
    print('There are ' + femaleDancers.count() + ' female dancers waiting to dance.');
}
if (maleDancers.count() > 0) {
    print('There are ' + maleDancers.count() + ' male dancers waiting to dance.');
}