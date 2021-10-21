/**
 * Given the head of a Singly LinkedList, write a
 * function to determine if the LinkedList has a cycle in it or not.
 */

(() => {
  class Node {
    constructor(public value: number, public next: Node | null = null) {}
  }

  const has_cycle = function (head: Node) {
    let slow: Node | null | undefined = head;
    let fast: Node | null = head;
    while (fast !== null && fast.next !== null) {
      // 2 steps
      fast = fast.next.next;
      // 1 step
      slow = slow?.next;
      if (slow === fast) {
        // We have a cycle
        return true;
      }
    }
    return false;
  };

  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  console.log("LinkerdList has cycle", has_cycle(head));

  head.next.next.next.next.next.next = head.next.next;
  console.log("LinkerdList has cycle", has_cycle(head));

  head.next.next.next.next.next.next = head.next.next.next;
  console.log("LinkerdList has cycle", has_cycle(head));
})();
