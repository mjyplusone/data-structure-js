function hashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;   // 散列函数
    this.betterHash = betterHash;
    this.showDistro = showDistro;   // 显示散列表中数据
    this.put = put;   // 将数据存入散列表
    this.get = get;   // 散列表取值
}

// 会产生碰撞
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

// 霍纳算法改进散列函数
function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function put(key, value) {
    // var pos = this.simpleHash(key);
    var pos = this.betterHash(key);
    this.table[pos] = value;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            print(i + ': ' + this.table[i]);
        }
    }
}

// 散列表存储并查询
var pnumbers = new hashTable();
var name, number;
for (var i = 0; i < 3; i++) {
    putstr('Enter a name (space to quit): ');
    name = readline();
    putstr('Enter a number: ');
    number = readline();
    pnumbers.put(name, number);
}

name = '';
putstr('Name for number (Enter quit to stop): ');
while (name !== 'quit') {
    name = readline();
    if (name === 'quit') {
        break;
    }
    print(name + "'s number is " + pnumbers.get(name));
    putstr('Name for number (Enter quit to stop): ');
}