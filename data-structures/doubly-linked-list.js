function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
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
}


const list = new DoublyLinkedList();

list.add(12);
list.add(23);
list.add(34);

console.log('list', list);
