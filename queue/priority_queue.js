// 优先队列
// 比如急诊室，根据患者病情程度分优先级，高优先级先于低优先级，同等优先级按队列处理

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

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

// 重新定义dequeue
function dequeue() {
    var priority = this.dataStore[0].code;
    var priorityIndex = 0;
    for (var i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code < priority) {
            priority = this.dataStore[i].code;
            priorityIndex = i;
        }
    }
    return this.dataStore.splice(priorityIndex, 1);
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
        retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
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


var q = new Queue();
q.enqueue(new Patient('aaa', 5));
q.enqueue(new Patient('bbb', 4));
q.enqueue(new Patient('ccc', 6));
q.enqueue(new Patient('ddd', 1));
q.enqueue(new Patient('eee', 1));
print(q.toString());

var seen = q.dequeue();
// 注意splice返回被删除值组成的数组
print('Patient being treated: ' + seen[0].name);
print('Patients waiting to be seen: ');
print(q.toString());

// 下一轮
var seen = q.dequeue();
print('Patient being treated: ' + seen[0].name);
print('Patients waiting to be seen: ');
print(q.toString());

var seen = q.dequeue();
print('Patient being treated: ' + seen[0].name);
print('Patients waiting to be seen: ');
print(q.toString());