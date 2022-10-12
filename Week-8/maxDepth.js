var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
  };

//   Time complexity - O(N)
//   Space complexity - O(N)