function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    let queue = [ startingNode ]

    while (queue.length) {
        let node = queue.shift();
        visited.add(node);
        if (node.val === targetVal) return node;
        node.neighbors.forEach((neighbor) => visited.has(neighbor) ? null : queue.push(neighbor) );
    }
   
    return null;
    
}

module.exports = {
    breadthFirstSearch
};