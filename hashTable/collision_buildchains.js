function hashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains; // 开链法
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
    var index = 0;
    while (this.table[pos][index] != undefined) {
        index += 2;
    }
    this.table[pos][index] = key;
    this.table[pos][index + 1] = value;
}

function get(key) {
    var pos = this.simpleHash(key);
    var index = 0;
    while (this.table[pos][index] != undefined && this.table[pos][index] != key) {
        index += 2;
    }
    return this.table[pos][index + 1];
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        var index = 0;
        if (this.table[i][0] != undefined) {
            print(i + ': ' + this.table[i]);
        }
    }
}

function buildChains() {
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }
}

// 开链法避免碰撞
var hTable = new hashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

// 35: Cynthia,
// 45: Raymond,,Clayton,
// 57: Donnie,
// 77: David,
// 95: Danny,
// 116: Mike,
// 132: Jennifer,
// 134: Jonathan,