const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const percent = (a,b) => a%b;
const bar = document.querySelector('#bar');
const prev = document.querySelector('#prev');
const point = document.querySelector('#point');
let currentValue = [];
let operand;
let operation = [];
let n = 0;
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
    currentValue[n] = bar.textContent / 1;
}
const oper = e => {
    operation[n] = e.target.textContent;
    operand = currentValue[n];
    prev.textContent = operand;
    bar.textContent = '';
    n++;
}
const calculate = () => {
    for(let i = 0; i< currentValue.length -1;i++){
        currentValue[i+1] = operate(operation[i],currentValue[i],currentValue[i+1]);
    }
    const value = currentValue[currentValue.length - 1];
    bar.textContent = value;
    currentValue = [];
    operation = [];
    n = 0;
    currentValue[n] = value;
};
const reset = () => {
    bar.textContent = '';
    prev.textContent ='';
    operand = 0;
    currentValue = [];
    operation = [];
    n = 0;
};
const deleteAction = () => {
    let temp = bar.textContent.replace(bar.textContent[bar.textContent.length -1], '');
    bar.textContent = temp
    currentValue[n] = temp / 1;
};
const updateKey = (e) => {
    const key = e.key;
    if(key >= 0 || key < 10 || key === '.') {
        bar.textContent += key;
        currentValue[n] = bar.textContent / 1;
    }
    if(key === '*' || key === '/' || key === '+' || key === '-' || key === '%'){
        operation[n] = key;
        operand = currentValue[n];
        prev.textContent = operand;
        bar.textContent = '';
        n++;
    }
    if(key === '=' || key ==='Enter'){
        calculate();
    }
    if(key === 'Backspace'){
        deleteAction();
    }
    if(key === 'Escape') {
        reset();
    }

};
window.addEventListener('click', () =>{
    if(bar.textContent.includes('.')) point.removeEventListener('click',update);
    else point.addEventListener('click',update);
});

const digits = Array.from(document.querySelectorAll('.digit > *'));
digits.forEach(btn => btn.addEventListener('click',update));

const operations = Array.from(document.querySelectorAll('.operation > *'));
operations.forEach(btn => btn.addEventListener('click',oper));

const equal = document.querySelectorAll('.equal > *');
equal.forEach(btn => btn.addEventListener('click', calculate));

const clear = document.querySelector('#clear > *');
clear.addEventListener('click', reset);

const deletebtn = document.querySelector('#delete > *');
deletebtn.addEventListener('click', deleteAction);

window.addEventListener('keyup', updateKey);