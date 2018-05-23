function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((lowerBound + upperBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        count++;
        for (var i = position - 1; i > 0; i--) {
            if (arr[i] == data) {
                count++;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; i++) {
            if (arr[i] == data) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
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


// test
var nums = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 9, 17];
dispArr(nums);
putstr('input a number to search: ');
var num = parseInt(readline());
print();
// if (binSearch(nums, num) != -1) {
//     print('The position of ' + num + ' is: ' + binSearch(nums, num));
// } else {
//     print(num + ' is not in array.');
// }
print('The count of ' + num + ' is: ' + count(nums, num));
