// 冒泡排序
// 比较次数 最好情况n-1次 最差n-1+n-2+...+1=n(n-1)/2，时间复杂的O(n2）
// 稳定

load('CArray.js');

function bubbleSort() {
    var numElements = this.dataStore.length;
    var tmp;
    for (var i = 0; i < numElements - 1; i++) {
        var flag = false;  // 标志位，false表示此次循环没有交换，即排序完成
        for (var j = 0; j < numElements - 1 - i; j++) {
            if (this.dataStore[j] > this.dataStore[j+1]) {
                swap(this.dataStore, j, j+1);
                flag = true;
            }
        }
        print(this.toString());    // 显示过程
        if (!flag) {
            break;
        }
    }
}


// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.bubbleSort();
print();
print(mynums.toString());