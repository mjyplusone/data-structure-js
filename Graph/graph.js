function Graph(v) {
    this.vertices = v;    // 定点数
    this.edges = 0;       // 边数
    this.adj = [];        // 邻接表
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
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

graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.showGraph();