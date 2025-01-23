const dijkstra = (graph, start, end) => {
    const costs = {};
    const visited = [];
    let neighbors = {};
    
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || Infinity;
        }
    })
    
    let node = findNodeLowestCost(costs, visited);
    
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        })
        
        visited.push(node);
        node = findNodeLowestCost(costs, visited);
    }

    return costs;
}

const findNodeLowestCost = (costs, visited) => {
    let lowestCost = Infinity;
    let lowestNode;
    
    Object.keys(costs).forEach(node => {
        if (lowestCost > costs[node] && !visited.includes(node)) {
            lowestCost = costs[node];
            lowestNode = node;
        }
    })

    return lowestNode;
}

const graph = {
    a: { b: 2, c: 1 },
    b: { f: 7 },
    c: { d: 5, e: 2 },
    d: { f: 2 },
    e: { f: 1 },
    f: { g: 1 },
    g: {},
};

console.log(dijkstra(graph, "a", "g"));
