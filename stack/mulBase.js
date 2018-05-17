function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;   
    this.peek = peek;    // 仅返回栈顶元素不删除
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}


// // 使用自己实现的Stack
// function mulBase(num, base) {
//     var s = new Stack();
//     s.push(num % base);
//     num = Math.floor(num /= base);
//     while (num > 0) {
//         s.push(num % base);
//         num = Math.floor(num /= base);
//     }
//     var result = '';
//     while (s.length() > 0) {
//         result += s.pop();
//     }
//     return result;
// }


// js原生函数实现
function mulBase(num, base) {
    var result = [];
    result.push(num % base);
    num = Math.floor(num /= base);
    while(num > 0) {
        result.push(num % base);
        num = Math.floor(num /= base);
    }
    return result.reverse().join(''); 
}

var newNum = mulBase(32, 2);
print(newNum);