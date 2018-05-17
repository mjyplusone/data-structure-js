// 中序表达式转后序表达式
// 计算后序表达式的值

// (3 + 4) × 5 - 6
// 3 4 + 5 × 6 -

// 从中序表达式 转换为 后序表达式

//     建立符号栈
//     顺序扫描中序表达式
//     a） 是数字， 直接输出
//     b） 是运算符
//     i : “(” 直接入栈
//     ii : “)” 将符号栈中的元素依次出栈并输出, 直到 “(“, “(“只出栈, 不输出
//     iii: 其他符号, 将符号栈中的元素依次出栈并输出, 直到 遇到比当前符号优先级更低的符号或者”(“。 将当前符号入栈。
//     扫描完后, 将栈中剩余符号依次输出

var operator = ['+', '-', '*', '/', '(', ')'];

var priority = [
                    [0, 0, -1, -1],
                    [0, 0, -1, -1],
                    [1, 1, 0, 0],
                    [1, 1, 0, 0],
               ];

function comp(op1, op2) {
    var index1 = operator.indexOf(op1);
    var index2 = operator.indexOf(op2);

    return priority[index1][index2];
}

function transform(str) {
    var arr = str.split(' ');
    print(arr);

    var result = [];
    var operastack = [];
    for (var i = 0; i < arr.length; i++) {
        print('arri: ' + arr[i]);
        if (operator.indexOf(arr[i]) === -1) {
            // 数字直接输出
            result.push(arr[i]);
        } else {
            if (arr[i] === '(') {
                operastack.push(arr[i]);
            } else if (arr[i] === ')') {
                // 遇到)，操作数栈中除了(全部出栈并输出
                while (operastack[operastack.length - 1] !== '(')
                    result.push(operastack.pop());
                // (仅出栈不输出
                operastack.pop();
            } else {
                // 其他符号，比较优先级
                // 符号栈中元素依次出栈并输出，直到遇到优先级低的或(    
                while (operastack.length > 0 && operastack[operastack.length - 1] !== '(' && comp(operastack[operastack.length - 1], arr[i]) !== -1) {
                    result.push(operastack.pop());
                }

                // 当前符号压栈
                operastack.push(arr[i]);
            }
        }
        print(operastack);
        print(result);
    }
    while (operastack.length !== 0) {
        result.push(operastack.pop());
    }
    return result;
}

function count(str) {
    var num = [];
    var arr = str.split(' ');
    print(arr);
    for (var i = 0; i < arr.length; i++) {
        if (operator.indexOf(arr[i]) === -1) {
            num.push(Number(arr[i]));
        } else {
            var num1 = Number(num.pop());
            var num2 = Number(num.pop());
            if (arr[i] === '+') {
                num.push(num1 + num2);
            } else if (arr[i] === '-') {
                num.push(num2 - num1);
            } else if (arr[i] === '*') {
                num.push(num1 * num2);
            } else if (arr[i] === '/') {
                num.push(num2 / num1);
            }
        }
    }
    return num.pop();
}

print(transform('( 3 + 4 - 1 ) * 5 - 6').join(' '));
var trans = transform('( 3 + 4 - 1 ) * 5 - 6').join(' ');
print(count(trans));