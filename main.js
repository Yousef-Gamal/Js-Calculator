<<<<<<< HEAD
class Calculator{
    constructor(prev,curr){
        this.prev = prev;
        this.curr = curr;
        
        this.clear();
    }
    clear(){
        this.curr = '';
        this.prev = '';
        this.operation = undefined;
    }
    delete(){
        this.curr = this.curr.toString().slice(0, -1);
    }
    appendNumber(number){
        if(number === '.' && this.curr.includes('.')){
            return;
        }
        this.curr = this.curr.toString() + number.toString();
    }
    chooseOperation(operation){
        if(this.curr === ''){
            return;
        }
        if(this.prev !== ''){
            this.compute();
        }
        this.operation = operation;
        this.prev = this.curr;
        this.curr = '';
    }
    compute(){
        let computation;
        let prevNum = parseFloat(this.prev);
        let currNum = parseFloat(this.curr);

        if(isNaN(prevNum) || isNaN(currNum)) return;

        switch(this.operation){
            case '*':
                computation = prevNum * currNum;
                break;
            case '/':
                computation = prevNum / currNum;
                break;
            case '+':
                    computation = prevNum + currNum;
                    break;
            case '-':
                    computation = prevNum - currNum;
                    break;
            default:
                return;
        }
        this.curr = computation;
        this.operation = undefined;
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        }else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        currOperandTextElement.innerText = this.getDisplayNumber(this.curr);
        if(this.operation !== undefined){
            prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prev)} ${this.operation}`;
        } else{
            prevOperandTextElement.innerText = '';
        }
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');

const calc = new Calculator(prevOperandTextElement,currOperandTextElement);




numberBtns.forEach((btn)=>{
    btn.addEventListener('click',() => {;
        calc.appendNumber(btn.innerText);
        calc.updateDisplay();
    })
});

operationBtns.forEach((btn)=>{
    btn.addEventListener('click',() => {;
        calc.chooseOperation(btn.innerText);
        calc.updateDisplay();
    })
});

equalsBtn.addEventListener('click',(btn) => {
    calc.compute();
    calc.updateDisplay();
    calc.prev = '';
})

allClearBtn.addEventListener('click',(btn) => {
    calc.clear();
    calc.updateDisplay();
})

deleteBtn.addEventListener('click',(btn) => {
    calc.delete();
    calc.updateDisplay();
})


















// Old code [Before OOP]
// let cResult = document.querySelector('.result .current');
// let pResult = document.querySelector('.result .prev');
// let boxes = document.querySelector('.boxes');

// function result_clear(a,b){
//     a.innerHTML = null;
//     b.innerHTML = null;
// }
// let numbers = [];
// let operations = [];


// for(let i = 0;i < boxes.children.length;i++){
//     boxes.children[i].addEventListener('click',()=>{
//         // cResult.innerHTML += boxes.children[i].innerHTML;
//         if(Number(boxes.children[i].textContent) !== 0 &&  boxes.children[i].textContent !== 'AC'){
//             cResult.textContent += boxes.children[i].textContent;
//         }

//         if(boxes.children[i].textContent === 'AC'){
//             result_clear(cResult,pResult);
//             numbers = numbers.slice(0,0);
//             operations = operations.slice(0,0);
//             return;
//         }

//         if(Number(boxes.children[i].textContent) === 0 && cResult.textContent.length > 0){

//             if(boxes.children[i].children[0].classList.contains('fa-delete-left')){
//                 cResult.textContent = cResult.textContent.replace(cResult.textContent[0],'');
//                 return;
//             }

//             numbers.push(Number(cResult.textContent.trim()));
//             if(boxes.children[i].children[0].classList.contains('fa-plus')){
//                 operations.push('+');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-minus')){
//                 operations.push('-');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-divide')){
//                 operations.push('/');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-xmark')){
//                 operations.push('*');
//             }
        
//             pResult.innerHTML = cResult.innerHTML.trim();
//             pResult.innerHTML += boxes.children[i].innerHTML.trim();
//             cResult.textContent = null;

//             if(boxes.children[i].children[0].classList.contains('fa-equals')){
//                 result_clear('',pResult);
//                 let result = 0;
//                 for(let i = 0;i < numbers.length;i++){
//                     if(operations[i] === '+'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result += numbers[i + 1];
//                     }
//                     if(operations[i] === '-'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result -= numbers[i + 1];
//                     }
//                     if(operations[i] === '/'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result /= numbers[i + 1];
//                     }
//                     if(operations[i] === '*'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result *= numbers[i + 1];
//                     }
//                 }
//                 cResult.textContent = result;
//                 result = 0;
//                 numbers = numbers.slice(0,0);

//                 operations = operations.slice(0,0);
//             }

//         }

//     })
=======
class Calculator{
    constructor(prev,curr){
        this.prev = prev;
        this.curr = curr;
        
        this.clear();
    }
    clear(){
        this.curr = '';
        this.prev = '';
        this.operation = undefined;
    }
    delete(){
        this.curr = this.curr.toString().slice(0, -1);
    }
    appendNumber(number){
        if(number === '.' && this.curr.includes('.')){
            return;
        }
        this.curr = this.curr.toString() + number.toString();
    }
    chooseOperation(operation){
        if(this.curr === ''){
            return;
        }
        if(this.prev !== ''){
            this.compute();
        }
        this.operation = operation;
        this.prev = this.curr;
        this.curr = '';
    }
    compute(){
        let computation;
        let prevNum = parseFloat(this.prev);
        let currNum = parseFloat(this.curr);

        if(isNaN(prevNum) || isNaN(currNum)) return;

        switch(this.operation){
            case '*':
                computation = prevNum * currNum;
                break;
            case '/':
                computation = prevNum / currNum;
                break;
            case '+':
                    computation = prevNum + currNum;
                    break;
            case '-':
                    computation = prevNum - currNum;
                    break;
            default:
                return;
        }
        this.curr = computation;
        this.operation = undefined;
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';
        }else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        currOperandTextElement.innerText = this.getDisplayNumber(this.curr);
        if(this.operation !== undefined){
            prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prev)} ${this.operation}`;
        } else{
            prevOperandTextElement.innerText = '';
        }
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const currOperandTextElement = document.querySelector('[data-curr-operand]');

const calc = new Calculator(prevOperandTextElement,currOperandTextElement);




numberBtns.forEach((btn)=>{
    btn.addEventListener('click',() => {;
        calc.appendNumber(btn.innerText);
        calc.updateDisplay();
    })
});

operationBtns.forEach((btn)=>{
    btn.addEventListener('click',() => {;
        calc.chooseOperation(btn.innerText);
        calc.updateDisplay();
    })
});

equalsBtn.addEventListener('click',(btn) => {
    calc.compute();
    calc.updateDisplay();
    calc.prev = '';
})

allClearBtn.addEventListener('click',(btn) => {
    calc.clear();
    calc.updateDisplay();
})

deleteBtn.addEventListener('click',(btn) => {
    calc.delete();
    calc.updateDisplay();
})


















// Old code [Before OOP]
// let cResult = document.querySelector('.result .current');
// let pResult = document.querySelector('.result .prev');
// let boxes = document.querySelector('.boxes');

// function result_clear(a,b){
//     a.innerHTML = null;
//     b.innerHTML = null;
// }
// let numbers = [];
// let operations = [];


// for(let i = 0;i < boxes.children.length;i++){
//     boxes.children[i].addEventListener('click',()=>{
//         // cResult.innerHTML += boxes.children[i].innerHTML;
//         if(Number(boxes.children[i].textContent) !== 0 &&  boxes.children[i].textContent !== 'AC'){
//             cResult.textContent += boxes.children[i].textContent;
//         }

//         if(boxes.children[i].textContent === 'AC'){
//             result_clear(cResult,pResult);
//             numbers = numbers.slice(0,0);
//             operations = operations.slice(0,0);
//             return;
//         }

//         if(Number(boxes.children[i].textContent) === 0 && cResult.textContent.length > 0){

//             if(boxes.children[i].children[0].classList.contains('fa-delete-left')){
//                 cResult.textContent = cResult.textContent.replace(cResult.textContent[0],'');
//                 return;
//             }

//             numbers.push(Number(cResult.textContent.trim()));
//             if(boxes.children[i].children[0].classList.contains('fa-plus')){
//                 operations.push('+');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-minus')){
//                 operations.push('-');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-divide')){
//                 operations.push('/');
//             }
//             if(boxes.children[i].children[0].classList.contains('fa-xmark')){
//                 operations.push('*');
//             }
        
//             pResult.innerHTML = cResult.innerHTML.trim();
//             pResult.innerHTML += boxes.children[i].innerHTML.trim();
//             cResult.textContent = null;

//             if(boxes.children[i].children[0].classList.contains('fa-equals')){
//                 result_clear('',pResult);
//                 let result = 0;
//                 for(let i = 0;i < numbers.length;i++){
//                     if(operations[i] === '+'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result += numbers[i + 1];
//                     }
//                     if(operations[i] === '-'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result -= numbers[i + 1];
//                     }
//                     if(operations[i] === '/'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result /= numbers[i + 1];
//                     }
//                     if(operations[i] === '*'){
//                         if(result === 0){
//                             result = numbers[i];
//                         }
//                         result *= numbers[i + 1];
//                     }
//                 }
//                 cResult.textContent = result;
//                 result = 0;
//                 numbers = numbers.slice(0,0);

//                 operations = operations.slice(0,0);
//             }

//         }

//     })
>>>>>>> dc17eb3 (mod)
// }