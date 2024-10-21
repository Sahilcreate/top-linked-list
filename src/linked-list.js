import Node from "./node.js";

// Class which represent the full list
export default class LinkedList {
  constructor(head = null) {
    this.listHead = null;
  }

  // Adds a new node containing 'value' to the 
  // end of the list
  append(value) {
    if (this.listHead === null) {
      this.listHead = new Node(value, null);
    } else {
      let tmp = this.listHead;
      while(tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value, null);
    }
  }

  // Adds a new node containing 'value' to the 
  // start of the list
  prepend(value) {
    let tmp = this.listHead;
    this.listHead = new Node(value, tmp)
  }

  // returns the total number of nodes in the list
  size() {
    let tmp = this.listHead;
    let totalNode = 0;
    if (tmp) {
      totalNode = 1;
      while(tmp && tmp.nextNode != null) {
        tmp = tmp.nextNode;
        totalNode += 1;
      }
    }
    return totalNode;
  }

  // returns the first node in the list
  head() {
    return this.listHead;
  }

  // returns the last node in the list
  tail() {
    let tmp = this.listHead;
    if (tmp) {
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
    }
    return tmp;
  }

  //returns the node at the given 'index'
  at(index) {
    let tmp = this.listHead;
    let indexCount = 0;
    while (tmp.nextNode != null && tmp && index != indexCount) {
      tmp = tmp.nextNode;
      indexCount += 1;
    }
    if (index != indexCount) return "Index not found";
    return tmp;
  }

  // removes the last element from the list
  pop() {
    let tmp = this.listHead;
    if (tmp) {
      while (tmp.nextNode.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = null;
    } else {
      return "List is already empty";
    }
  }

  // returns true if the passed in value is in the list
  // and otherwise returns false
  contains(value) {
    let tmp = this.listHead;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      } else {
        tmp = tmp.nextNode;
      }
    }
    return false;
  }

  // returns the index of the node containing value, or
  // null if not found
  find(value) {
    let tmp = this.listHead;
    let index = 0
    while (tmp) {
      if (tmp.value === value) {
        return index;
      }
      index += 1;
      tmp = tmp.nextNode;
    }
    return null;
  }

  // represents your LinkedList objects as strings, so you can 
  // print them out and preview them in the console. The format
  // should be '(value)->(value)->(value)->null'
  toString() {
    let tmp = this.listHead;
    let string = '';
    while (tmp) {
      string = string.concat(`( ${tmp.value} ) -> `);
      tmp = tmp.nextNode;
    }
    return string.concat('null');
  }

  // It inserts a new node with the provided 'value' 
  // at the given 'index'
  insertAt(value, index) {
    //if index exceed the max index of our linked list
    //then the given node is added at end of the list
    if (index <= 0) {
      this.prepend(value);
    } else {
      let curnt = this.listHead;
      let prev = null;
      let indexCount = 0;
      while (curnt && index != indexCount) {
        const tmp = curnt;
        curnt = curnt.nextNode;
        prev = tmp;
        indexCount += 1;
      }
      const newNode = new Node(value, curnt);
      prev.nextNode = newNode;
    }
  }

  // It removes the node at the given 'index'
  removeAt(index) {
    if (index < 0) {
      return;
    } else if (index === 0 && this.listHead) {
        this.listHead = this.listHead.nextNode;
    } else if (this.listHead) {
        let curnt = this.listHead;
        let prev = null;
        let indexCount = 0;
        while (curnt.nextNode != null && index != indexCount) {
          const tmp = curnt;
          curnt = curnt.nextNode;
          prev = tmp;
          indexCount +=1;
        }
        if (index === indexCount) {
          prev.nextNode = curnt.nextNode;
        }
    }
  }
}