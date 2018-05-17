function khMatch(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            arr.push('(');
        } else if (str[i] === ')') {
            arr.pop();
        }
    }
    return arr.length === 0;
}

var str = '2.3 + 23 / 12 + (3.14159×0.24';
print(khMatch(str));
var str2 = '1 * (2 + 3)';
print(khMatch(str2));