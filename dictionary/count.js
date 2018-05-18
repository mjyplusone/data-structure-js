function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;   // 不用数组length属性是因为:当键的类型为字符串，length属性无效
    this.clear = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for (var key of Object.keys(this.dataStore).sort()) {
        print(key + '->' + this.dataStore[key]);
    }
}

function count() {
    var n = 0;
    for (var key of Object.keys(this.dataStore)) {
        n++;
    }
    return n;
}

function clear() {
    for (var key of Object.keys(this.dataStore)) {
        delete this.dataStore[key];
    }
}


// 统计单词出现次数
function count(str) {
    var arr = str.split(' ');
    var dic = new Dictionary();
    for (var i = 0; i < arr.length; i++) {
        if (dic.find(arr[i]) === undefined) {
            dic.add(arr[i], 1);
        } else {
            dic.add(arr[i], dic.find(arr[i]) + 1);
        }
    }

    dic.showAll();
}

count('the brown fox jumped over the blue fox');