function createStack() {
    let items = [];
    return {
        push(num) {
        items.push(num);
    },

    pop() {
        items.pop();
    } 
};
} 
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();  
stack.items;     
// stack.items = [10, 100, 1000];
console.log(stack.items);