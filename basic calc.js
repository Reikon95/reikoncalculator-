var first = prompt("Enter first number");
var operand = prompt ("Enter operand. At present only +, -, * or / can be accommodated");
var second = prompt ("Enter second number");
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
 
