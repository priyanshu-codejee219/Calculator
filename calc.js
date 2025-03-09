const field = document.getElementById('field');
const eqn = document.getElementById('eqn'); 

document.addEventListener('keydown', (event) => {
    if (event.key.length === 1 || event.key === 'Backspace') {
        field.focus();
    }
    if (event.key === 'Enter') {
        calculate();
    }
});

class Stack {
    constructor() {
      this.items = []; 
    }

    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty"; 
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty"; 
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }

function appendValue(value){
    field.value += value;
}

function clearAll(){
    field.value = '';
    eqn.value= '';
}

function backspace(){
    field.value = field.value.slice(0,-1);
}

function evaluate(num1,num2,char){
    if(char=="+"){
        return num1+num2;
    }else if(char=="-"){
        return num1-num2;
    }else if(char=="*"){
        return num1*num2;
    }else{
        return num1/num2;
    }
}

function calculate(){
    let expression = field.value;
    if(expression ==""){
        return
    }
    eqn.value = expression;
    let numbers = new Stack();
    let operands = new Stack();
    const nums=['1','2','3','4','5','6','7','8','9','0','.'];
    const ops=['+','-','/','*'];
    const precedence = {
        '+':1,
        '-':1,
        '*':2,
        '/':2
    };
    let num="";
    let lastChar = null;
    
    for(let i = 0; i < expression.length; i++){
        let char = expression[i];
        if(nums.includes(char) || (char === '-' && (lastChar === null || ops.includes(lastChar) || lastChar === '('))){
            num += char;
        }else{
            if(num !== ""){
                numbers.push(Number(num));
                num = "";
            }

            if(char == '('){
                operands.push(char);
            }else if(char == ')'){
                while(!operands.isEmpty() && operands.peek() != '('){
                    let num2 = numbers.pop();
                    let num1 = numbers.pop();
                    let operand = operands.pop();
                    numbers.push(evaluate(num1, num2, operand));
                }
                operands.pop();
            }else if(ops.includes(char)){
                while(!operands.isEmpty() && precedence[char] <= precedence[operands.peek()]){
                    let num2 = numbers.pop();
                    let num1 = numbers.pop();
                    let operand = operands.pop();
                    numbers.push(evaluate(num1, num2, operand));
                }
                operands.push(char);
            }
        }
        lastChar = char;
    }

    if(num !== ""){
        numbers.push(Number(num));
    }

    while(!operands.isEmpty()){
        let num2 = numbers.pop();
        let num1 = numbers.pop();
        let operand = operands.pop();
        numbers.push(evaluate(num1, num2, operand));
    }

    field.value = numbers.pop();
}