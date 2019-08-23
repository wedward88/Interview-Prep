function maxValue(startNode, visited=new Set()) {
    let queue = [ startNode ];
    let max = -Infinity;

    while (queue.length) {
        let node = queue.shift();
        if (node.val > max) max = node.val;
        
        if (visited.has(node)) continue;
        visited.add(node);

        queue.push(...node.neighbors);
    }

    return max;
}

module.exports = {
    maxValue
};