const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const divide = function(num1, num2){
    return num1 / num2;
}

const operate = function(num1, operator, num2){
    if(operator === '+') return add(num1, num2);
    else if(operator === '-') return subtract(num1, num2);
    else if(operator === '*') return multiply(num1, num2);
    else if(operator === '/') return divide(num1, num2);
}

const display = document.querySelector('#display');
const button = document.querySelectorAll('button');
const operatorBtn = document.querySelectorAll('.operators button');

let mainNum = 0;
let num1 = 0;
let num2 = 0;
let operator = '';
let showedOutput = false;
let operatorPressed = false;
const maxLength = 10;

function pressNumber(){
    button.forEach(handleClickEvent);  
}

function handleClickEvent(btn){
    btn.addEventListener('click', handleDisplay);
}

function handleDisplay(event){
    const btnVal = event.target.textContent;

    if(btnVal === 'CLR') {
        display.textContent = '';
        mainNum = 0;
        num1 = 0;
        num2 = 0;
    }
    else if(btnVal === '+'){
        handleOperatorBtn(btnVal);
    }
    else if(btnVal === '-'){
        handleOperatorBtn(btnVal);
    }
    else if(btnVal === '*'){
        handleOperatorBtn(btnVal);
    }
    else if(btnVal === '/'){
        handleOperatorBtn(btnVal);
    }
    else if(btnVal === '='){
        handleEqualBtn();
    }
    else {
        btnPress(btnVal);        
    }
}

function btnPress(btnVal){
    if(display.textContent === '+' || display.textContent === '-' || display.textContent === '*' || display.textContent === '/'){        
        display.textContent = btnVal;
        mainNum = parseInt(display.textContent);
    }
    else{
        if(showedOutput){
            display.textContent = btnVal;
            mainNum = parseInt(display.textContent);
            showedOutput =  false;
        }
        else{
            if(display.textContent.length < 10){
                display.textContent += btnVal;                
            }            
            if(display.textContent.length <= 100){
                mainNum = parseInt(display.textContent);
            }
        }            
    }
}

function handleEqualBtn(){
    num2 = mainNum;
        const displayResult = operate(num1, operator, num2);
        let displayText = displayResult.toString();
        if(displayText.length > 10){
            displayText = displayText.substring(0, 10);
        }
        display.textContent = displayText;;
        mainNum = parseInt(displayText);
        showedOutput = true;
}
function handleOperatorBtn(btnVal){
    display.textContent = btnVal;
    operator = `${btnVal}`;
    num1 = mainNum;

    btnPress(btnVal);
    
}
pressNumber();
