const BFS = (graph, func) => {
    let searchQueue = [...graph["you"].map(i => ({name: i, step: 1, path: ["you"]}))];
    let searched = [];
    
    while (searchQueue.length) {
        const person = searchQueue.shift();

        if (!searched.includes(person.name)) {
            if (func(person.name)) {
                return { found: true, person: person };
            } else {
                searchQueue.push(...graph[person.name].map(i => ({name: i, step: person.step + 1, path: [...person.path, person.name, i]})));
                searched.push(person.name)
            }
        } 
    }
    
    return false;
}

const personIsSeller = (person) => {
    return person === 'anuj'
}

const graph = {
        "you":  ["alice", "bob", "claire"],
        "bob":  ["anuj", "peggy"],
        "alice":  ["peggy"],
        "claire": ["thom", "jonny"],
        "anuj": [],
        "peggy":  [],
        "thom":  [],
        "jonny":  [],  
    }

console.log(BFS(graph, personIsSeller).person.path.join(" => "))
