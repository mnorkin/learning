class Node {
  constructor(public data: number, public left?: Node, public right?: Node) {}
}

export class BinarySearchTree {
  constructor(public root?: Node) {}

  addNode(data: number) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  removeNode(
    data: number,
    node: Node | undefined = this.root
  ): Node | undefined {
    if (!node) {
      return undefined;
    }

    // if current node's data is equal to data which we're searching for
    if (node.data > data) {
      node.left = this.removeNode(data, node.left);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(data, node.right);
      return node;
    }

    // if node has no left's and right's - just remove the node
    if (!node.left && !node.right) {
      // we're in the leaf which we're interested in
      return undefined;
    }
    // if node has right side
    else if (!node.left) {
      node = node.right;
      return node;
    } else if (!node.right) {
      node = node.left;
      return node;
    } else {
      // has both sides
      // BOOM
      return node;
    }
  }

  insertNode(node: Node, newNode: Node) {
    // if new node's data is less than existing node's data
    if (newNode.data < node.data) {
      // if left node does not exists - insert newNode as left node
      if (!node.left) {
        node.left = newNode;
      } else {
        // If left node exists - pass that node to insertNode
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * There are 3 ways to traverse a binary search tree:
   * 1. Inorder
   *  - left subtree
   *  - root node
   *  - right subtree
   *
   * The inorder way is important if you want to flatten the tree back into it's original sequence
   *
   * 2. Preorder
   *  - root node
   *  - left subtree
   *  - right subtree
   *
   * The preorder way is important if you need to inspect roots before inspecting leaves
   *
   * 3. Postorder
   *  - left subtree
   *  - right subtree
   *  - root node
   *
   * The postorder way is important if you want to delete an entire tree, or simply want to inspect the leaves
   * before inspecting the nodes. If you deleted the root node, you wouldn't be able to delete the nodes in the right
   * subtree!
   */

  /**
   * Depth first traversal
   *
   * Depth-first traversal involves traversing a tree from top to bottom
   *
   * In depth-first traversal, we first traverse through the left subtrees, and then the right subtrees.
   *
   * Depth-first traversal uses a stack data structure. The stack keeps track of all the visited nodes.
   * However, the stack is implemented impicitly.
   *
   */

  /**
   * Breadth-first traversal
   *
   * we first traverse through one level of children nodes, then through one level of grandchildren nodes, then through one level of grand-grandchildren nodes, etc.
   */

  traverseBF() {
    if (!this.root) return;

    const queue = [];
    // push the root to the queue
    queue.push(this.root);
    const output: number[] = [];

    // while queue is not empty
    while (queue.length) {
      // take the last element of the queue
      const node = queue.shift();
      if (!node) {
        // if no nodes in the queue - return the output
        return output;
      }
      if (node.left) {
        // if node has left node - push it to the queue
        queue.push(node.left);
      }
      if (node.right) {
        // if node has right node - push it to the queue
        queue.push(node.right);
      }

      output.push(node.data);
    }

    return output;
  }

  /**
   * Finding minimum and maximum value
   *
   * Finding the minimum and maximum value in a binary search tree is easy.
   * For minimum - you always know that the left subtree's values are lower than the current node.
   * For maximum - you always know that the right subree's values are higher than the current node.
   */

  min() {
    let node = this.root;
    while (node?.left) {
      node = node.left;
    }
    return node?.data;
  }

  max() {
    let node = this.root;
    while (node?.right) {
      node = node.right;
    }

    return node?.data;
  }
}
