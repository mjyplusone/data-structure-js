// 无序、没有重复元素

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;           // 并集
    this.intersect = intersect;   // 交集
    this.subset = subset;         // 子集
    this.difference = difference; // 补集 返回新集合(包含属于第一个集合但不属于第二个集合的成员)
    this.show = show;
    this.contains = contains;
}

function add(data) {
    // 无重复元素
    if (this.dataStore.indexOf(data) === -1) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

// 并集
function union(set) {
    var tmpSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tmpSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++) {
        if (!tmpSet.contains(set.dataStore[i])) {
            tmpSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tmpSet;
} 

// 交集
function intersect(set) {
    var tmpSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tmpSet.add(this.dataStore[i]);
        }
    }
    return tmpSet;
}

// 子集
function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var member of this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

// 补集 返回新集合(包含属于第一个集合但不属于第二个集合的成员)
function difference(set) {
    var tmpSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tmpSet.add(this.dataStore[i]);
        }
    }
    return tmpSet;
}

function size() {
    return this.dataStore.length;
}

function show() {
    return this.dataStore;
}


// test
var names = new Set();
names.add('aaa');
names.add('bbb');
names.add('ccc');
names.add('ddd');
if (names.add('ccc')) {
    print('ccc added.');
} else {
    print('Can not add ccc, must already be in set.');
}
print(names.show());

if (names.remove('bbb')) {
    print('bbb removed.');
} else {
    print('bbb not removed.')
}
print(names.show());

if (names.remove('eee')) {
    print('eee removed.');
} else {
    print('eee not removed.')
}
print(names.show());

// union
var another = new Set();
another.add('aaa');
another.add('eee');
var unionSet = new Set();
unionSet = names.union(another);
print('\nAfter union: ');
print(unionSet.show());


// intersect
var another = new Set();
another.add('aaa');
another.add('ccc');
another.add('fff');
var intersectSet = new Set();
intersectSet = names.intersect(another);
print('\nAfter intersect: ');
print(intersectSet.show());


// subset
var sub1 = new Set();
sub1.add('aaa');
sub1.add('ddd');
if (names.subset(sub1)) {
    print('\n{aaa, ccc, ddd} is subset of {aaa, ddd}');
} else {
    print('\n{aaa, ccc, ddd} is not subset of {aaa, ddd}');
}

var sub2 = new Set();
sub2.add('aaa');
sub2.add('ddd');
sub2.add('ccc');
sub2.add('eee');
if (names.subset(sub2)) {
    print('\n{aaa, ccc, ddd} is subset of {aaa, ddd, ccc, eee}');
} else {
    print('\n{aaa, ccc, ddd} is not subset of {aaa, ddd, ccc, eee}');
}


// difference
var another = new Set();
another.add('aaa');
another.add('ddd');
diff = names.difference(another);
print('\n{' + names.show() + '} difference {' + another.show() + '}: ' + diff.show());

