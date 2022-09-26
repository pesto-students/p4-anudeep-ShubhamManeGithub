let MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
  };
  // Push element x to the back of queue. 
  MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
  };
  
  //  Removes the element from in front of queue and returns that element.
  MyQueue.prototype.pop = function () {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  
    var pop = this.stack2.pop()
  
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop())
    }
  
    return pop
  };
  
  MyQueue.prototype.peek = function () {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  
    var pop = this.stack2.pop()
    this.stack2.push(pop)
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop())
    }
  
    return pop
  };
  
  // Returns whether the queue is empty.
  MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 ? true : false
  };