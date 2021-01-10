export class Graph {
  constructor(private adjList: Map<number, number[]> = new Map()) {}

  // add new vertex (node)
  addVertex(vertex: number) {
    this.adjList.set(vertex, []);
  }

  // connects vertexes (nodes) with edge (bi-directional)
  addEdge(vertex1: number, vertex2: number) {
    this.adjList.get(vertex1)?.push(vertex2);
    this.adjList.get(vertex2)?.push(vertex1);
  }

  print() {
    this.adjList.forEach((values, key) => {
      const linearValue = values.reduce((acc, value) => {
        acc += value + " ";
        return acc;
      }, "");

      console.log(`${key} => ${linearValue}`);
    });
  }
}
