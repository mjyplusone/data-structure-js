function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.update = update;
    this.find = find;
}

function insert(data) {
    var node = new Node(data, null, null);
    if (this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

function find(data) {
    var current = this.root;
    while (current != null) {
        if (data == current.data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else { 
            current = current.right;
        }
    }
    return null;
}

function update(data) {
    var node = this.find(data);
    node.count++;
}

function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        putstr(node.show() + ' ');
        inOrder(node.right);
    }
}

function prArray(arr) {
    putstr(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; i++) {
        putstr(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            putstr('\n');
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}


// test
var grades = genArray(100);
prArray(grades);

var gradetree = new BST();
for (var i = 0; i < grades.length; i++) {
    if (gradetree.find(grades[i])) {
        gradetree.update(grades[i]);
    } else {
        gradetree.insert(grades[i]);
    }
}

var cont = 'y';
while (cont == 'y') {
    putstr('\n\nEnter a grade: ');
    var grade = parseInt(readline());
    var findGrade = gradetree.find(grade);
    if (findGrade) {
        print('Occurrences of ' + grade + ': ' + findGrade.count);
    } else {
        print('No occurrence of ' + grade);
    }
    putstr('Look ar another grade (y/n)? ');
    cont = readline();
}