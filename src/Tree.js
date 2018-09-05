import EventEmitter from 'events';

class Tree extends EventEmitter {
  constructor(key, parent) {
    super();
    this.parent = parent;
    this.key = key;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getParent() {
    return this.parent;
  }

  // BEGIN (write your solution here)
  addChild(name) {
    const child = new Tree(name, this);
    this.children.set(name, child);
    this.emit('add', child);
    return child;
  }

  removeChild(name) {
    const child = new Tree(name, this);
    this.children.delete(name);
    this.emit('remove', child);
  }
  // END
}

export default Tree;
