/*
    A graph is non-linear data structure that consists of a finite number of vertices also called nodes connected by edges.
    Trees are a specific type of graph data structure.
    Types of graph:
    Directed Graph:
    A graph in which the edges have a direction.
    Edges are usually represented by arrows pointing in the direction the graph can be traversed.
    Undirected:
    A graph in which the edges are bidirectional.
    The graph can be traversed in either direction.
    The absence of an arrow tells us that the graph is undirected.
    More graphs types:
    Only Nodes (Vertices) No Edges.
    Multiple edges from one Node.
    Cycles in the graph.
    Self-Loops on a node.
    Disconected.
    Graph containing weightage on edges.
    Graph Usage:
    Google maps (cities: Nodes, Road: edges).
    Social media sites (users: Nodes, links: edges).
    Graph Representation:
    Adjacency Matrix
    Adjacency List
    Adjacency Matrix: An adjacency matrix is a 2D array of size VxV.
    Where row and column represent a vertex.
    If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.
    const matrix = [[0,1,0], [1,0,1],[0,1,0]]
    Adjacency list:
    Vertices are stored in a map like data structure, and every vartex stores a list of its adjacent verticies.
    const adjacentList = {
        'A': ['B'],
        'B': ['A', 'C']
        'C': ['B']
    }
    Adjacency Matrix vs Adjacency List:
    1. With an adjacency list, we only need to store the values for the edges that exist.
    with adjacency matrix, you store values irrespective of weather an edge exists or not.
    Storage wise, an adjacency list is way more efficient.
    2. With adjacency list, insering and finding adjacent nodes is constant time complexity.
    Whereas with adjacency matrix it is linear time complexity.
    3. An adjacency list allows you to store additional values with an edge such as weight of the edge. with adjacency matrix, such information would have to be stored externally.
*/

//Implementation
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    remoVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return;
        }
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('B', 'C');

graph.display();

console.log(graph.hasEdge("A", "C"));
graph.remoVertex("B");
graph.display();



