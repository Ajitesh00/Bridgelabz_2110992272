// Node structure
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Traversals
function preorder(root) {
  if (!root) return;
  console.log(root.val);      // Visit
  preorder(root.left);        // Left
  preorder(root.right);       // Right
}

function inorder(root) {
  if (!root) return;
  inorder(root.left);         // Left
  console.log(root.val);      // Visit
  inorder(root.right);        // Right
}

function postorder(root) {
  if (!root) return;
  postorder(root.left);       // Left
  postorder(root.right);      // Right
  console.log(root.val);      // Visit
}

// Example tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder:");
preorder(root);

console.log("Inorder:");
inorder(root);

console.log("Postorder:");
postorder(root);