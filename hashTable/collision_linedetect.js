function hashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.values = [];   // 线性探测避免碰撞,存储value
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(key, value) {
    var pos = this.simpleHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = value;
    } else {
        while (this.table[pos] != undefined) {
            pos ++;
        }
        this.table[pos] = key;
        this.values[pos] = value;
    }
}

function get(key) {
    var pos = -1;
    pos = this.simpleHash(key);
    if (pos > -1) {
        for (var i = pos; this.table[i] != undefined; i++) {
            if (this.table[i] == key) {
                return this.values[i];
            }
        }
    }
    return undefined;
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        var index = 0;
        if (this.table[i] != undefined) {
            print(i + ': ' + this.table[i]);
        }
    }
}

// 线性探测法避免碰撞
var hTable = new hashTable();
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}
hTable.showDistro();


// 35: Cynthia
// 45: Raymond
// 46: Clayton
// 57: Donnie
// 77: David
// 95: Danny
// 116: Mike
// 132: Jennifer
// 134: Jonathan