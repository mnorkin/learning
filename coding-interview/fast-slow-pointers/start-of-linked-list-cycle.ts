/**
 * Given the head of a Singly LinkedList that contains a cycle,
 * write a function to find the starting node of the cycle.
 */

(() => {
  class Node {
    constructor(public value: number, public next: Node | null = null) {}
  }

  const find_has_cycle = function (head: Node) {
    let slow: Node | null | undefined = head;
    let fast: Node | null = head;
    while (fast !== null && fast.next !== null) {
      // 2 steps
      fast = fast.next.next;
      // 1 step
      slow = slow?.next;

      if (slow === fast) {
        // We have a cycle
        // return true;
        let current = slow;
        let cycle_length = 0;
        while (true) {
          current = current.next;
          cycle_length += 1;
          if (current === slow) {
            break;
          }
        }
        return cycle_length;
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

  head.next.next.next.next.next.next = head.next.next;
  console.log("LinkerdList cyclce length", find_has_cycle(head));

  head.next.next.next.next.next.next = head.next.next.next;
  console.log("LinkerdList cyclce length", find_has_cycle(head));

  head.next.next.next.next.next.next = head;
  console.log("LinkerdList cyclce length", find_has_cycle(head));
})();
