// JavaScript 的 Object 类就是以字典的形式设计的。 
// 本章将使用 Object 类本身的特性， 实现一个 Dictionary 类， 让这种字典类型的对象使用起来更加简单。 

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


// test
var dic = new Dictionary();
dic.add('aaa', 123);
dic.add('ccc', 345);
dic.add('bbb', 234);
dic.add('eee', 567);
dic.add('ddd', 456);
print('bbb is: ' + dic.find('bbb'));
dic.showAll();
dic.remove('bbb');
print('Remove bbb');
dic.showAll();

print('count: ' + dic.count());

dic.clear();
dic.showAll();
print('count: ' + dic.count());