// 自组织方式：通过将频繁查找到的元素置于数据集的起始位置来最小化查找次数

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            // // 自组织方式
            // if (i > 0) {
            //     swap(arr, i, i - 1);
            // }

            // 更好的自组织方式：只对距离数据集起始位置一定范围外的元素进行交换
            if (i > arr.length * 0.2) {
                swap(arr, i, 0);
            }

            return true;
            // return i;
        }
    }
    return false;
    // return -1;
}

function swap(arr, index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        putstr(arr[i] + ' ');
        if (i % 10 == 9) {
            putstr('\n');
        }
    }
    if (i % 10 != 0) {
        putstr('\n');
    }
}

// var nums = [];
// for (var i = 0; i < 100; i++) {
//     nums[i] = Math.floor(Math.random() * 101);
// }
// dispArr(nums);
// putstr('input a number to search: ');
// var num = parseInt(readline());
// print();
// if (seqSearch(nums, num) != -1) {
//     print(num + ' is in the position of: ' + seqSearch(nums, num));
// } else {
//     print('There is not ' + num + ' in array.');
// }

// // 自组织方式查找test
// var numbers = [5,1,7,4,2,10,9,3,6,8];
// print(numbers);
// // 查找3次，观察被频繁查找的4的位置
// for (var i = 0; i <= 3; i++) {
//     seqSearch(numbers, 4);
//     print(numbers);
// }

// 更好的自组织方式查找test
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
putstr('input a number to search: ');
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
    print('find it.');
    dispArr(nums);
} else {
    print('do not find it.');
}