// 背包问题 - 动态规划解法
// 保险箱中有 5 件物品，尺寸分别是 3、 4、 7、 8、 9，
// 价值分别是 4、 5、 10、 11、 13，背包的容积为 16 
// 解决方案：选取第三件物品和第五件物品，总尺寸 16，总价值 23

// 动态规划：K[i][j]表示面对第i件物品，且背包容量为j时所能获得的最大价值

// 参数：背包总容积、每件物品尺寸、每件物品价值、物品总数
function knapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (j = 0; j <= capacity; j++) {
            // 边界
            if (i == 0 || j == 0) {
                K[i][j] = 0;
            } else if (size[i - 1] <= j) {
                // 背包容量可以放下第 i 件物品，考虑拿这件物品是否能获取更大的价值
                // 如果拿，K[i][j] = K[i - 1][j - size[i - 1]] + value[i - 1]
                // 如果不拿 K[i][j] = K[i - 1][j]
                K[i][j] = max(value[i - 1] + K[i - 1][j - size[i - 1]], K[i - 1][j]);
            } else {
                // 背包的容量比商品体积小，装不下
                K[i][j] = K[i - 1][j];
            }
            putstr(K[i][j] + ' ');
        }
        print();
    }
    return K[n][capacity];
}

function max(a, b) {
    return (a > b) ? a : b;
}

var capacity = 16;
var size = [3, 4, 7, 8, 9];
var value = [4, 5, 10, 11, 13];
var n = 5;
print(knapsack(capacity, size, value, n));