import { Graph } from "./graphs";

describe("Graphs", () => {
  describe("#addVertex", () => {
    it("should add new vertex", () => {
      const graph = new Graph();

      graph.addVertex(1);
      graph.addVertex(2);

      graph.print();
    });
  });

  describe("#addEdge", () => {
    it("should edge two vertexes", () => {
      const graph = new Graph();

      graph.addVertex(1);
      graph.addVertex(2);
      graph.addEdge(1, 2);

      graph.print();
    });
  });
});
