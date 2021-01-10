export class Node {
  constructor(
    public data: number,
    public next?: Node,
    public previous?: Node
  ) {}
}

export class DoublyLinkedList {
  constructor(public head?: Node, public tail?: Node, public length = 0) {}

  add(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // set the previous node as current's tail
      node.previous = this.tail;
      // update the current's tail next element to point to newly created node
      if (this.tail) this.tail.next = node;
      // update the tail with new node
      this.tail = node;
    }
    this.length++;
  }

  addAfter(data: number, toNodeData: number) {
    let current = this.head;
    const node = new Node(data);

    while (current) {
      if (current.data === toNodeData) {
        if (current === this.tail) {
          this.tail = node;
          current.next = node;
          node.previous = current;
          current.previous = undefined;
        } else {
          node.next = current.next;
          node.previous = current;
          current.next = node;
        }
      }
      break;
    }
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
          if (this.tail) this.tail.next = undefined;
        }
        // in the middle
        else {
          // set current's previous next as current's next element
          if (current.previous) current.previous.next = current.next;
          if (current.next) current.next.previous = current.previous;
        }
        this.length--;
        break;
      }

      current = current.next;
    }
  }
}
