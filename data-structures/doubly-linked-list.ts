export class Node {
  constructor(
    public data: number,
    public next: Node | null = null,
    public previous: Node | null = null
  ) {}
}

export class DoublyLinkedList {
  constructor(
    public head: Node | null = null,
    public tail: Node | null = null,
    public length = 0
  ) {}

  add(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // set the previous node as current's tail
      node.previous = this.tail;
      // update the current's tail next element to point to newly created node
      this.tail.next = node;
      // update the tail with new node
      this.tail = node;
    }
    this.length++;
  }

  remove(data: number) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        // if the element is the head
        if (current === this.head) {
          // set the head as the next, after head
          this.head = this.head.next;
        }
        // if the element is the tail
        else if (current === this.tail) {
          // set the tail as the previous, before the tail
          this.tail = this.tail.previous;
          this.tail.next = null;
        }
        // in the middle
        else {
          // set current's previous next as current's next element
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
        break;
      }

      current = current.next;
    }
  }
}
