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

// 思路：队列
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
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}


// test
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);