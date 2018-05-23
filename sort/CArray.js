// 数组测试平台
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    // this.bubbleSort = bubbleSort;
    // this.selectionSort = selectionSort;
    // this.insertionSort = insertionSort;
    // this.shellSort = shellSort;
    // this.mergeSort = mergeSort;
    this.quickSort = quickSort;

    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var res = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        res += this.dataStore[i] + ' ';
        if ((i + 1) % 10 == 0) {
            res += '\n';
        }
    }
    return res;
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function swap(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}


// // test
// var numElements = 100;
// var myNums = new CArray(numElements);
// myNums.setData();
// print(myNums.toString());

