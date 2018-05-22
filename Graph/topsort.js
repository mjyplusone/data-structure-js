// 利用深度优先搜索
// 先退出DFS函数的顶点是出度为0的顶点，即拓扑排序最后一个顶点
// 因此，按退出DFS函数的先后记录下来的顶点序列即为逆向拓扑排序序列

function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

function topSort() {
    var stack = [];
    var marked = [];
    for (var i = 0; i < this.vertices; i++) {
        marked[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if (!marked[i]) {
            this.topSortHelper(i, marked, stack);
        }
    }
    while (stack.length > 0) {
        print(this.vertexList[stack.pop()]);
    }
}

// DFS
function topSortHelper(v, marked, stack) {
    marked[v] = true;
    for (var w of this.adj[v]) {
        if (!marked[w]) {
            this.topSortHelper(w, marked, stack);
        }
    }
    // 退出DFS前记录顶点
    stack.push(v);
}

// 思路：递归
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        print('Visited vertex: ' + v);
    }
    for (var w of this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}


function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        putstr(this.vertexList[i] + '->');
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                    putstr(this.vertexList[this.adj[i][j]] + ' ');
            }
        }
        print();
    }
}


// test
g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
g.showGraph();
print();
g.topSort();