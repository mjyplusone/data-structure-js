function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;     // 插入节点
    // 查找
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    // 删除
    this.remove = remove;
    this.removeNode = removeNode;
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

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        putstr(node.show() + ' ');
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        putstr(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + ' ');
    }
}

function getMin() {
    var current = this.root;
    while (current.left != null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right != null) {
        current = current.right;
    }
    return current.data;
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

function getSmallest(node) {
    var current = node;
    while (current.left != null) {
        current = current.left;
    }
    return current;
}

function remove(data) {
    this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tmpNode = getSmallest(node.right);
        node.data = tmpNode.data;
        node.right = removeNode(node.right, tmpNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


// test
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print('Inorder traversal: ');
inOrder(nums.root);
print('\nPreorder traversal: ');
preOrder(nums.root);
print('\nPostorder traversal: ');
postOrder(nums.root);

// 查找
var min = nums.getMin();
print('\nThe mininum value of the BST is: ' + min);
var max = nums.getMax();
print('The maximum value of the BST is: ' + max);
print('\n');
putstr('Enter a value to search for: ');
var value = parseInt(readline());
var found = nums.find(value);
if (found != null) {
    print('Found ' + value + ' in the BST.');
} else {
    print(value + ' was not found in the BST.');
}

// 删除节点
putstr('\n\nThe node you want to delete is: ');
var value = parseInt(readline());
nums.remove(value);
print('Inorder traversal: ');
inOrder(nums.root);
print('\nPreorder traversal: ');
preOrder(nums.root);
print('\nPostorder traversal: ');
postOrder(nums.root);
