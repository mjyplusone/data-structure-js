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

// // 使用自己定义的Stack
// function isPalindrome(word) {
//     var s = new Stack();
//     for (var i = 0; i < word.length; i++) {
//         s.push(word[i]);
//     }
//     var rword = '';
//     while (s.length() > 0) {
//         rword += s.pop();
//     }
//     if (word === rword) {
//         return true;
//     } else {
//         return false;
//     }
// }


// 使用js原生的函数实现
function isPalindrome(word) {
    return word.split('').reverse().join('') === word;
}


// test
var word = 'hello';
if (isPalindrome(word)) {
    print(word + ' is a palindrome');
} else {
    print(word + ' is not a palindrome');
}
var word = 'racecar';
if (isPalindrome(word)) {
    print(word + ' is a palindrome');
} else {
    print(word + ' is not a palindrome');
}