// 查找最短路径 - 广度优先搜索

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.bfs = bfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        putstr(i + '->');
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                putstr(this.adj[i][j] + ' ');
            }
        }
        print();
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (this.adj[v] != undefined) {
            print('Visited vertex: ' + v);
        }
        for (var w of this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}


// test
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
// g.addEdge(3, 4);
g.showGraph();
g.bfs(0);

var vertex = 4;
var path = g.pathTo(4);
while (path.length > 0) {
    if (path.length > 1) {
        putstr(path.pop() + '-');
    } else {
        putstr(path.pop());
    }
}