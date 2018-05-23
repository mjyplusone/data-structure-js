// 递归版本Fibonacci
function recurFib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

// 动态规划版Fibonacci(保存中间版本)
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; i++) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 1;
        for (var i = 3; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n];
    }
}

// 迭代版Fibonacci(不保存中间结果)
function iterFib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        first = 1;
        second = 1;
        result = 1;
        for (var i = 3; i <= n; i++) {
            result = first + second;
            first = second;
            second = result;
        }
        return result;
    }
}

var start = new Date().getTime();
print(recurFib(30));
var stop = new Date().getTime();
print('recurFib: ' + (stop - start) + 'ms');
print();
var start = new Date().getTime();
print(dynFib(30));
var stop = new Date().getTime();
print('dynFib: ' + (stop - start) + 'ms');
print();
var start = new Date().getTime();
print(iterFib(30));
var stop = new Date().getTime();
print('iterFib: ' + (stop - start) + 'ms');