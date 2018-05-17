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


// 阶乘
function factorail(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorail(n-1);
    }
}

// 使用栈模拟递归,递归变循环省内存
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var result = 1;
    while(s.length() > 0) {
        result *= s.pop();
    }
    return result;
}

// 使用原生js模拟递归
function fact2(n) {
    if (n <= 0) return 0;
    else if (n <= 1) return 1;

    var result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

print(factorail(5));
print(fact(5));
print(fact2(5));