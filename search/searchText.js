function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

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

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1);
            j--;
        }
    }
}

function swap(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

var words = read('words.txt').split(' ');
word = 'rhetoric';
insertionSort(words);
var start = new Date().getTime();
// var position = seqSearch(words, word);
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position > 0) {
    print('The position of ' + word + ' is in: ' + position);
    print('Time consuming: ' + elapsed);
} else {
    print('Do not find ' + word);
}