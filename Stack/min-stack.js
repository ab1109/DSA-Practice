class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.count = 0
    }

    push(val) {
        if (!this.stack.length) {
            this.stack[this.count] = val
            this.minStack[this.count] = val
        } else {
            this.stack[this.count] = val
            this.minStack[this.count] = Math.min(this.minStack[this.minStack.length - 1], val)

        }
        this.count += 1
    }
    pop() {
        if (this.stack.length == 0) {
            return null
        } else {
            this.minStack.pop()
            this.count -= 1
            return this.stack.pop()
        }
    }

    top() {
        if (this.count === 0) {
            return null;
        } else {
            return this.stack[this.count - 1];
        }
    }

    getMin() {
        if (this.count === 0) {
            return null;
        } else {
            return this.minStack[this.count - 1];
        }
    }

}
