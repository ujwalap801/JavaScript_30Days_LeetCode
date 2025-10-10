class Stack {
    constructor() {
        // Initialize your stack
        this.s1 = [];

    }
    
    push(element) {
        // Add element to the top
        this.s1.push(element);
        return this.s1.length;
    }
    
    pop() {
        // Remove and return top element
      return  this.s1.pop();
    }
    
    peek() {
        // Return top element without removing
        let ans = this.s1[this.s1.length - 1];
        return ans;
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.s1.length == 0;
    }
    
    size() {
        // Return number of elements
        return this.s1.length;
    }
    
    clear() {
        // Remove all elements
      this.s1 = [];

    }
}

module.exports = Stack;