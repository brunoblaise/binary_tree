class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node === null) return -1;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);

      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.postOrder(node.right);
    }
  }

  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else return node;
  }
  getRootNode() {
    return this.root;
  }
}

let BS = new BinaryTree();

BS.insert(20);
BS.insert(5);

BS.insert(24);

BS.insert(1);

BS.insert(7);

BS.insert(23);

BS.insert(28);
BS.remove(5);

let root = BS.getRootNode();
console.log(root);

console.log('inorder');
BS.inOrder(root);

console.log('preorder');
BS.preOrder(root);

console.log('postorder');

BS.postOrder(root);
