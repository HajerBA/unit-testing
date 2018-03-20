

class Calcul{
 
notnumber(a,b){
    if (typeof(a)!== 'number' || typeof(b) !== 'number') {
     return NaN;
        
    }
}
  operation(a,b, operand){
    switch (operand) {
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
           throw new Error("wrong operand given");
            break;
     }
 }
}