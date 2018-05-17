// 使用队列对数据进行排序
// 基数排序

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

// 根据相应位上的数值，将数字分配到相应队列
function distribute(nums, queues, digit) {
    for (var i = 0; i < nums.length; i++) {
        // 根据个位上的值分配
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else if (digit === 10) {
        // 根据十位上的值分配
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var bin = 0; bin < 10; bin++) {
        while (!queues[bin].empty()) {
            nums[i++] = queues[bin].dequeue();
        }
    }
}

function displayArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        putstr(arr[i] + ' ');
    }
}

var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
print('Before radix sort: ');
displayArray(nums);
distribute(nums, queues, 1);
collect(queues, nums);
distribute(nums, queues, 10);
collect(queues, nums);
print('\nAfter radix sort: ');
displayArray(nums);
