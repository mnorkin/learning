// In the binary search tree, the left child node is always smaller than the parent and the right child is always greater than the parent
// left child < parent node < right child

import { prettyPrint } from "../pretty-print";
import { BinarySearchTree } from "./binary-search-tree";

describe("Binary search tree", () => {
  describe("#addNode", () => {
    it("should add root node", () => {
      const tree = new BinarySearchTree();
      tree.addNode(12);

      expect(tree.root?.data).toEqual(12);
    });

    it("should add left of root node", () => {
      const tree = new BinarySearchTree();
      tree.addNode(12);
      tree.addNode(10);

      expect(tree.root?.left?.data).toEqual(10);
    });

    it("should add right of root node", () => {
      const tree = new BinarySearchTree();
      tree.addNode(12);
      tree.addNode(14);

      expect(tree.root?.right?.data).toEqual(14);
    });

    it("should add right of root's right node", () => {
      const tree = new BinarySearchTree();
      tree.addNode(12);
      tree.addNode(14);
      tree.addNode(16);

      expect(tree.root?.right?.right?.data).toEqual(16);
    });
  });

  describe("#removeNode", () => {
    it("should remove root node", () => {
      const tree = new BinarySearchTree();

      tree.addNode(12);
      tree.removeNode(12);

      expect(tree.root).toBeUndefined;
    });

    it("should remove left leaf", () => {
      const tree = new BinarySearchTree();

      tree.addNode(12);
      tree.addNode(10);
      tree.removeNode(10);

      expect(tree.root?.left).toBeUndefined;
    });

    it("should remove right leaf", () => {
      const tree = new BinarySearchTree();

      tree.addNode(12);
      tree.addNode(14);
      tree.removeNode(14);

      expect(tree.root?.right).toBeUndefined;
    });

    it("should remove right node", () => {
      const tree = new BinarySearchTree();

      tree.addNode(12);
      tree.addNode(14);
      tree.addNode(16);
      tree.removeNode(14);

      expect(tree.root?.right?.data).toEqual(16);
    });

    it.skip("should remove right node having left and right", () => {
      const tree = new BinarySearchTree();

      tree.addNode(12);
      tree.addNode(14);
      tree.addNode(13);
      tree.addNode(16);

      tree.removeNode(14);

      // expect(tree.root?.right?.data).toEqual(16);
    });
  });

  describe("#breadth-first traversal", () => {
    it("should traverse 3 nodes", () => {
      const tree = new BinarySearchTree();
      tree.addNode(15);
      tree.addNode(11);
      tree.addNode(30);

      expect(tree.traverseBF()).toEqual([15, 11, 30]);
    });
  });

  describe("#min", () => {
    it("should find 11", () => {
      const tree = new BinarySearchTree();
      tree.addNode(15);
      tree.addNode(11);
      tree.addNode(30);

      expect(tree.min()).toEqual(11);
    });
  });

  describe("#max", () => {
    it("should find 30", () => {
      const tree = new BinarySearchTree();
      tree.addNode(15);
      tree.addNode(11);
      tree.addNode(30);

      expect(tree.max()).toEqual(30);
    });
  });
});
