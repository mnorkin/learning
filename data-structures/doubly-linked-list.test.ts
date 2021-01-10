import { expect } from "@jest/globals";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly linked list", () => {
  describe("#add", () => {
    it("head should not be null", () => {
      const list = new DoublyLinkedList();
      list.add(12);

      expect(list.head).not.toBeNull;
    });

    it("tail should not be null", () => {
      const list = new DoublyLinkedList();
      list.add(12);

      expect(list.tail).not.toBeNull;
    });
  });

  describe("#addAfter", () => {
    it("should insert right after head/tail", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.addAfter(23, 12);

      expect(list.tail?.data).toEqual(23);
    });

    it("should have previous right after head/tail", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.addAfter(23, 12);

      expect(list.tail?.previous?.data).toEqual(12);
    });

    it("should have previous tail not equal to head", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.addAfter(23, 12);

      expect(list.tail?.data).not.toEqual(list.head?.data);
    });
  });

  describe("#remove", () => {
    it("should set head null given list length is 1", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.remove(12);

      expect(list.head).toBeNull;
    });

    it("should set tail null given list length is 1", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.remove(12);

      expect(list.tail).toBeNull;
    });

    it("should set tail to the remaining element given list length is 2", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.add(23);
      list.remove(23);

      expect(list.tail?.data).toEqual(12);
    });

    it("should set head to the remaining element given list length is 2", () => {
      const list = new DoublyLinkedList();
      list.add(12);
      list.add(23);
      list.remove(23);

      expect(list.head?.data).toEqual(12);
    });
  });
});
