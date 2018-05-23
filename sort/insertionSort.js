// 插入排序：每一步将一个待排序的记录，插入到前面已经排好序的有序序列中去，直到插完所有元素为止
// 时间复杂度 最好O(n) 最坏O(n2)
// 稳定

load('CArray.js');

function insertionSort() {
    for (var i = 1; i < this.dataStore.length; i++) {
        var j = i;
        while (j > 0 && this.dataStore[j] < this.dataStore[j - 1]) {
            swap(this.dataStore, j, j - 1);
            j--;
        }
    }
}


// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.insertionSort();
print();
print(mynums.toString());