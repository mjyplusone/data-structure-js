// 选择排序：每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素
// 时间复杂度O(n2)
// 不稳定

load('CArray.js');

function selectionSort() {
    var min;
    for (var i = 0; i < this.dataStore.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < this.dataStore.length; j++) {
            if (this.dataStore[j] < this.dataStore[min]) {
                min = j;
            } 
        }
        if (min != i) swap(this.dataStore, i, min);
    }
}


// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.selectionSort();
print();
print(mynums.toString());