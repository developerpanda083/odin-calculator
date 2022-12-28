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


let firstNum = '';
let firstOpt = '';
let nextNum = '';
let nextOpt = '';
let totalNum = 0;

let currentDisplayFlag = false;
let totalDisplayFlag = false;

function display() {
    numBtn.forEach(numbtn => numbtn.addEventListener('click', () => {
        if (!currentDisplayFlag) {
            currentOutput.innerHTML = firstNum;
            if (totalOutput.innerHTML.length > 0) {
                currentDisplayFlag = true;
            }
        } else {
            currentOutput.innerHTML = totalNum.toString() + ' + ' + nextNum;
        }
    }));

    plusBtn.addEventListener('click', () => {
        if (!totalDisplayFlag) {
            currentOutput.innerHTML = firstNum + ' + ';
            totalOutput.innerHTML = firstNum + ' + ';
            if (totalOutput.innerHTML.length > 0) {
                totalDisplayFlag = true;
            }
        } else {
            currentOutput.innerHTML = totalNum.toString() + ' + ' + nextNum;
        }
    });

    minusBtn.addEventListener('click', () => {
        if (totalOutput.innerHTML.length === 0) {
            totalOutput.innerHTML = currentOutput.innerHTML + ' - ';
        } else {
            totalOutput.innerHTML = totalNum.toString() + ' - ' 
        }
        currentOutput.innerHTML = ''
    });
}

numBtn.forEach(numbtn => numbtn.addEventListener('click', () => {
    if (nextNum.length === 0) {
        firstNum += (numbtn.value).toString();
    } else {
        nextNum += (numbtn.value).toString();
    }
    console.log('firstnum', firstNum)
    console.log('next num', nextNum)
}));

plusBtn.addEventListener('click', () => {
    if (!currentDisplayFlag) {
        nextNum = firstNum;
        if (nextNum.length > 0) {
            currentDisplayFlag = true;
        }
    } else {
        totalNum += parseInt(nextNum);
        nextNum = '';
    }
})






display();