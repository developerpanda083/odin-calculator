// current issue: -operators are one behind actual button press
// -display() is incorrect when multiple operations are done in a row
// -decimal,equals,clear,negative/positive buttons need work
// -css

let currentOutput = document.getElementById('current-output');
let totalOutput = document.getElementById('total-output');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const equalsBtn = document.getElementById('equals');

const numBtn = document.querySelectorAll('.num-btn');
const clearBtn = document.getElementById('clear');
const operatorBtn = document.querySelectorAll('.operator-btn');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');


let currentNum = [];
let numTotal = [];
let currentOperator = '';


// first input is array of numbers entered, second input is array of totals
function addition(a, b) { 
    // if totals array is empty, add first value from numbers entered array
    if (a.length !== 0 && b.length === 0) { 
        b.push(a[0]);
    } else if (a.length === 2) {
        let initAdd = a[0] + a[1];
        b.push(initAdd)
    } else {
        let lastA = a.length - 1; //last value in array
        let lastB = b.length - 1;
        let addTotal = b[lastB] + a[lastA];
        b.push(addTotal);
    }
};


function subtract(c, d) {
    if (c.length !== 0 && d.length === 0) {
        d.push(c[0]);
    } else {
        let lastC = c.length - 1;
        let lastD = d.length - 1;
        let subTotal = d[lastD] - c[lastC];
        d.push(subTotal);
    }
};

function multiply(e, f) { 
    if (e.length !== 0 && f.length === 0) {
        f.push(e[0]);
    } else {
        let lastE = e.length - 1;
        let lastF = f.length - 1;
        let multTotal = e[lastE] * f[lastF];
        f.push(multTotal);
    } 
};

function divide(g, h) {
    if (h === 0) {
        return "Division by zero";
    } else {
        if (g.length !== 0 && h.length === 0) {
            h.push(g[0]);
        } else {
            let lastG = g.length - 1;
            let lastH = h.length - 1;
            let divTotal = g[lastG] / H[lastH];
            h.push(divTotal);
        } 
    }
};

function operate(fx, i, j) {
    return (fx(i, j));
}


function display() {
    numBtn.forEach(numbtn => numbtn.addEventListener('click', () => {
        currentOutput.innerHTML = currentOutput.innerHTML + numbtn.innerHTML;
    }));

    operatorBtn.forEach(optbtn => optbtn.addEventListener('click', () => {
        switch (currentOperator) {
            case 'plus':
                if (numTotal.length )
                totalOutput.innerHTML += currentOutput.innerHTML + ' + ';
                break;
            case 'minus':
                totalOutput.innerHTML += currentOutput.innerHTML + ' - ';
                break;
            case 'multiply':
                totalOutput.innerHTML += currentOutput.innerHTML + ' x ';
                break;
            case 'divide':
                totalOutput.innerHTML += currentOutput.innerHTML + ' / ';
                break;
        }
        
        currentOutput.innerHTML = '';
        
    }))

    equalsBtn.addEventListener('click', () => {
        totalOutput.innerHTML = totalOutput.innerHTML + ' ' + currentOutput.innerHTML;
    
        currentOutput.innerHTML = '';
    })
}

function clearDisplay() {clearBtn.addEventListener('click', () => {
    currentOutput.innerHTML = '';
    totalOutput.innerHTML = ''; 
}) };

let tempArray = [];
let firstOpt = '';
let firstNum = [];

plusBtn.addEventListener('click', () => {totalOutput.innerHTML = currentOutput.innerHTML + ' + ';},{once: true});
minusBtn.addEventListener('click', () => {totalOutput.innerHTML = currentOutput.innerHTML + ' - ';}, {once: true});
multiplyBtn.addEventListener('click', () => {totalOutput.innerHTML = currentOutput.innerHTML + ' x ';}, {once: true});
divideBtn.addEventListener('click', () => {totalOutput.innerHTML = currentOutput.innerHTML + ' / ';}, {once: true}); 


//adds each number press to a temporary holding array
numBtn.forEach(numBtn => numBtn.addEventListener('click',(e) => {
    tempArray.push(numBtn.value);
    if (firstNum.length === 2) {
        toOperate(firstOpt,firstNum,numTotal);
    }
}))



operatorBtn.forEach(operatorBtn => operatorBtn.addEventListener('click',(e) => {
    if (firstOpt === '') {
        firstOpt = operatorBtn.value;
    } else {
        currentOperator = operatorBtn.value;
    }

    //concatenates values in the temp array into a temp string
    let tempNum = '';
    for (let i = 0; i < tempArray.length; i++) {
        tempNum = tempNum + tempArray[i];
    }
    // convert string back to number and add to current numbers array
    if (firstNum.length < 3) {
        firstNum.push(parseInt(tempNum))
        currentNum.push(parseInt(tempNum));
    } else {
        currentNum.push(parseInt(tempNum));
    }
    console.log('firstNum',firstNum)

    toOperate(currentOperator,currentNum,numTotal);

    // here to see values
    console.log('current nums',currentNum);
    console.log('total array', numTotal)
    console.log('result',numTotal[numTotal.length-1]);

    // clears temporary string and array
    tempNum = '';
    tempArray = [];
}))



function toOperate(operator,current,total) {
    switch(operator) {
        case "plus":
            operate(addition,current,total);
            break;
        case "minus":
            operate(subtract,current,total);
            break;
        case "multiply":
            operate(multiply,current,total);
            break;
        case "divide":
            operate(divide,current,total);
            break;
    } 
}






equalsBtn.addEventListener('click', () => {
    let tempNum = '';
    for (let i = 0; i < tempArray.length; i++) {
        tempNum = tempNum + tempArray[i];
    }
    currentNum.push(parseInt(tempNum))
    tempArray = [];

})


display();
clearDisplay();
