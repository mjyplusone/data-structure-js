// 实现队列
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;  // 队尾添加元素
    this.dequeue = dequeue;  // 队首删除元素
    this.front = front;  // 读取队首元素
    this.back = back;    // 读取队尾元素
    this.toString = toString;
    this.empty = empty;
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

// test
var q = new Queue();
q.enqueue('aaa');
q.enqueue('bbb');
q.enqueue('ccc');
print(q.toString());

q.dequeue();
print(q.toString());

print('Front: ' + q.front());
print('Back: ' + q.back());