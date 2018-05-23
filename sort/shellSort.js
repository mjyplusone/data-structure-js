// 希尔排序：插入排序的改进版，分组插入排序，逐步缩小增量
// 时间复杂度O(n2)
// 不稳定

load('CArray.js');

var gaps = [5, 3, 1];

function shellSort() {
    // for(var g = this.dataStore.length / 2; g > 0; g = Math.floor(g / 2)) {
    for (var g = 0; g < gaps.length; g++) {
        for (var i = gaps[g]; i < this.dataStore.length; i++) {
            var j = i;
            while (j >= gaps[g] && this.dataStore[j] < this.dataStore[j - gaps[g]]) {
                swap(this.dataStore, j, j - gaps[g]);
                j -= gaps[g];
            }
        }
        print(this.toString());
    }
}


// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.shellSort();
print();
print(mynums.toString());