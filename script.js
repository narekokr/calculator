const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const percent = (a,b) => a%b;
const bar = document.querySelector('#bar');
const prev = document.querySelector('#prev');
let currentValue;
let operand;
let operation;
const operate = (op,a,b) => {
    switch(op){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        case '%':
            return percent(a,b);
    }
};

const update = e => {
    bar.textContent += e.target.textContent;
    currentValue = bar.textContent / 1;
    console.log(currentValue);
}
const oper = e => {
    operation = e.target.textContent;
    operand = currentValue;
    prev.textContent = operand;
    bar.textContent = '';
    console.log(currentValue);
}
const calculate = e => {
    const value = operate(operation, operand,currentValue);
    bar.textContent = value;
    currentValue = value;
}

const digits = Array.from(document.querySelectorAll('.digit > *'));
digits.forEach(btn => btn.addEventListener('click',update));

const operations = Array.from(document.querySelectorAll('.operation > *'));
operations.forEach(btn => btn.addEventListener('click',oper));

const equal = document.querySelectorAll('.equal > *');
equal.forEach(btn => btn.addEventListener('click', calculate));

const clear = document.querySelector('#clear > *');
clear.addEventListener('click', () => {
    bar.textContent = '';
    prev.textContent ='';
    operand = 0;
    currentValue = 0;
});

const deletebtn = document.querySelector('#delete > *');
deletebtn.addEventListener('click', () => {
    let temp = bar.textContent.replace(bar.textContent[bar.textContent.length -1], '');
    bar.textContent = temp
    currentValue = temp / 1;
    console.log('hi');
});
