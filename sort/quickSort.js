// 快速排序
// 分而治之， 通过递归将数据依次分解为包含较小元素和较大元素的不同子序列
// 首先在列表中选择一个元素作为基准值, 列表中小于基准值的元素移到数组的底部，大于基准值的元素移到数组的顶部
// 时间复杂度O(nlogn)
// 不稳定

load('CArray.js');

function quickSort(list) {
    if (list.length == 0) {
        return [];
    }

    var small = [];
    var large = [];
    var base = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < base) {
            small.push(list[i]);
        } else {
            large.push(list[i]);
        }
    }
    return quickSort(small).concat(base, quickSort(large));
}


// test
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
print();
print(quickSort(mynums.dataStore));
