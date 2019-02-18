let first = prompt("Enter first number");
let operand = prompt ("Enter operand. At present only +, -, * or / can be accommodated");
let second = prompt ("Enter second number");
if (operand == '+'){
    final = Number(first) + Number(second)
} else if (operand == "-"){
    final = Number(first) - Number(second)
} else if (operand == "*"){
    final = Number(first) * Number(second)
} else if (operand == "/"){
    final = Number(first) / Number(second)
} else {
    final = "Error"
};
alert(final);
 
