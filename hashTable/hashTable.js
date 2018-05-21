// 基于数组设计散列表

function hashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;   // 散列函数
    this.betterHash = betterHash;
    this.showDistro = showDistro;   // 显示散列表中数据
    this.put = put;   // 将数据存入散列表
    // this.get = get;
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

function put(data) {
    var pos = this.simpleHash(data);
    // var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            print(i + ': ' + this.table[i]);
        }
    }
}


// // test
// var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
// var hTable = new hashTable();
// for (var i = 0; i < someNames.length; i++) {
//     hTable.put(someNames[i]);
// }
// hTable.showDistro();



// 散列化整形键
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; i++) {
        var num = '';
        // 9位随机数编号
        for (var j = 1; j <= 9; j++) {
            num += Math.floor(Math.random() * 10);
        }
        // 50-100随机数为分数
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var numStudents = 10;
var students = new Array(numStudents);
genStuData(students);

print('Student data: \n');
for (var i = 0; i < students.length; i++) {
    print(students[i].substring(0, 9) + ' ' + students[i].substring(9));
}

print('\n\nData distribution: \n');
var hTable = new hashTable();
for (var i = 0; i < students.length; i++) {
    hTable.put(students[i]);
}
hTable.showDistro();