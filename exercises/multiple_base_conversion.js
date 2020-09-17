const Stack = require('../index');

function convertToBase(number, finalBase) {
    let modulus;
    let num = number;
    let stack = new Stack();
    let str = ""
    while(num >= 1){
        modulus = num % finalBase
        stack.push(modulus)
        num = parseInt(num / finalBase)
    }
    while(stack.length()){
        str += stack.pop();
    }
    return str;
}

console.log(convertToBase(125, 8))