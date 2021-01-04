function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addData(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        // if current element is in the tail
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          // switch new node next to currents next
          node.next = current.next;
          // set current node next to new node
          current.next = node;
          break;
        }
      }
      // loop over the nodes
      current = current.next;
    }
  }

  removeNode(data) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {

        // if current element is head
        if (current === this.head) {
          // point head to the next element
          this.head = current.next;
        }

        // if current element is tail
        else if (current === this.tail) {
          this.tail = previous;
          this.tail.next = null;
        }

        // if in the middle
        else {
          previous.next = current.next;
        }

        break;
      }
      previous = current;
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.addData(12);
list.addData(23);
list.addData(34);

list.removeNode(23);

console.log('list', list);
