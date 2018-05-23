// 自底向上归并排序
// 两个有序数列合并：比较二个数列的第一个数，取小的，然后在对应数列中删除这个数。依次比较，如果有数列为空，直接将另一个数列的数据依次取出即可。
// 先递归分解数列，再合并数列
// 时间复杂度O(nlogn)
// 稳定

load('CArray.js');

function mergeSort() {
    if (this.dataStore.length < 2) {
        return;
    }

    var step = 1;
    var left, right;
    while (step < this.dataStore.length) {
        left = 0;
        right = left + step;
        while (right + step <= this.dataStore.length) {
           mergeArr(this.dataStore, left, left + step, right, right + step);
           left = right + step;
           right = left + step; 
        }
        if (right < this.dataStore.length) {
            mergeArr(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}

function mergeArr(arr, startLeft, stopLeft, startRight, stopRight) {
    // 分治
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < rightArr.length - 1; i++) {
        rightArr[i] = arr[k];
        k++;
    }
    k = startLeft;
    for (var i = 0; i < leftArr.length - 1; i++) {
        leftArr[i] = arr[k];
        k++;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;

    // 合并
    var i = 0; 
    var j = 0;
    for (var k = startLeft; k < stopRight; k++) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
    }
    print('left array - ', leftArr);
    print('right array - ', rightArr);
    print('array - ', arr);
}

function mergeArr2(arr, start, mid, stop) {
    // 分治
    var leftArr = new Array(mid - start + 1);
    var rightArr = new Array(stop - mid + 1);
    
    k = start;
    for (var i = 0; i < leftArr.length - 1; i++) {
        leftArr[i] = arr[k];
        k++;
    }
    k = mid;
    for (var i = 0; i < rightArr.length - 1; i++) {
        rightArr[i] = arr[k];
        k++;
    }
    leftArr[leftArr.length - 1] = Infinity;
    rightArr[rightArr.length - 1] = Infinity;
    
    // 合并
    var i = 0; 
    var j = 0;
    for (var k = start; k < stop; k++) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
    }
    print('left array - ', leftArr);
    print('right array - ', rightArr);
    print('array - ', arr);
}



// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.mergeSort();
print();
print(mynums.toString());

// arr = [1, 3, 5, 2, 4, 6, 7];
// mergeArr(arr, 0, 3, 3, 7);
// // left array -  1,3,5,7,Infinity
// // right array -  2,4,6,Infinity
// // array -  1,2,3,4,5,6,7