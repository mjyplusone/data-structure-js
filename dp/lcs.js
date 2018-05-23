// 最长公子串
// 暴力解法：遍历所有子字符串，比较是否相同，然后取最长
// 长度n的字符串子串数n(n-1)/2，假设两个都为n，复杂度O(n^4)
// 动态规划解法：
// dp[i][j]表示 s1 字符串以第 i 个字符结尾的子串，和 s2 字符串以第 j 个字符结尾的子串的最大公子串长度
// 如果s1[i]等于s2[j]，则dp[i][j] = dp[i - 1][j - 1] + 1

function lcs(word1, word2) {
    // 初始化两个变量以及一个二维数组
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length; i++) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length; j++) {
            lcsarr[i][j] = 0;
        }
    }

    // 构建用于保存字符匹配记录的表
    for (var i = 0; i <= word1.length; i++) {
        for (var j = 0; j <= word2.length; j++) {
            // 第0行第0列总被设为0，作为边界
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (lcsarr[i][j] > max) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }

    // 取出最大公子串
    var str = '';
    if (max == 0) {
        return '';
    } else {
        for (var i = index - max; i < index; i++) {
            str += word1[i];
        }
        return str;
    }
}

print(lcs('abbcc', 'dbbcc'));
print(lcs('abbcc', 'dbbc'));