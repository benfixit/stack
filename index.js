class Stack {
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }

    push(data){
        this.dataStore[this.top++] = data;
    }

    pop(){
        return this.dataStore[--this.top];
    }

    peek(){
        return this.dataStore[this.top - 1]
    }

    clear(){
        this.top = 0
    }

    length(){
        return this.top
    }
}

module.exports = Stack

// let s = new Stack(); 
// s.push("Daniel"); 
// s.push("Raymond"); 
// s.push("Bryan"); 
// console.log("length: " + s.length()); 
// console.log(s.peek());
// let popped = s.pop();
// console.log("The popped element is: " + popped); 
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length()); 
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());



