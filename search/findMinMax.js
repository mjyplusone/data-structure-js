function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
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

var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
var maxValue = findMax(nums);
dispArr(nums);
print();
print('Min value is: ' + minValue);
print('Max value is: ' + maxValue);