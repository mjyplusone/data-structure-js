// 将一组单词存储在一个数组中， 并按正序和倒序分别显示这些单词。

arr = ['cat', 'apple', 'book', 'bird'];
// 正序
arr.sort((val1, val2) => {
    // 注意字符串排序不能直接写return a - b, 两个字符串相减为NaN
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }
});
console.log(arr);

// 倒序
