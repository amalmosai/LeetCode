/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
     if (!node) return null; 
    const visited = {};
    function cloneNode(node) {
        if (!node) return null; 
        if (visited[node.val]) return visited[node.val];

        const clonedNode =  new _Node(node.val, []);
        visited[node.val] = clonedNode;

        for (const neighbor of node.neighbors) {
            clonedNode.neighbors.push(cloneNode(neighbor));
        } 

        return clonedNode;
    }

    return cloneNode(node);
};