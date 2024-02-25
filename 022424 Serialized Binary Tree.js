/* Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'*/ 

class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function serialize(root) {
    const nodes = [];
  
    function helper(node) {
      if (node) {
        nodes.push(node.val);
        helper(node.left);
        helper(node.right);
      } else {
        nodes.push('#'); // '#' represents null
      }
    }
  
    helper(root);
    return nodes.join(' ');
  }
  
  function deserialize(s) {
    const data = s.split(' ');
    let index = 0;
  
    function helper() {
      const val = data[index++];
      if (val === '#') {
        return null;
      }
      const node = new Node(val);
      node.left = helper();
      node.right = helper();
      return node;
    }
  
    return helper();
  }
  
  // Test the implementation
  const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
  const serializedTree = serialize(node);
  const deserializedTree = deserialize(serializedTree);
  console.log(deserialize(serialize(node)).left.left.val === 'left.left' ? "Test Passed!" : "Test Failed!");