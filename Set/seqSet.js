function Set() {
    this.dataStore = [];
    this.add = add;
    this.show = show;
}

function add(data) {
    if (this.dataStore.indexOf(data) === -1) {
        if (this.dataStore.length === 0) {
            this.dataStore.push(data);
        } else {
            for (var i = 0; i < this.dataStore.length; i++) {
                if (data >= this.dataStore[i]) {
                    this.dataStore.splice(i + 1, 0, data);
                    break;
                }
            }
        }
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

// test
var names = new Set();
names.add('aaa');
names.add('ddd');
names.add('ccc');
names.add('bbb');
print(names.show());