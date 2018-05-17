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

// // test
// var s = new Stack();
// s.push('aaa');
// s.push('bbb');
// s.push('ccc');
// print('length: ' + s.length());
// print(s.peek());

// var popped = s.pop();
// print(popped);
// print(s.peek());

// s.push('ddd');
// print(s.peek());

// s.clear();
// print('length: ' + s.length());
// print(s.peek());

