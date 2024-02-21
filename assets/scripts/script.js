// BUTTONS 

let button0 = document.querySelector('#zero')
let button1 = document.querySelector('#one')
let button2 = document.querySelector('#two')
let button3 = document.querySelector('#three')
let button4 = document.querySelector('#four')
let button5 = document.querySelector('#five')
let button6 = document.querySelector('#six')
let button7 = document.querySelector('#seven')
let button8 = document.querySelector('#eight')
let button9 = document.querySelector('#nine')

let clearButton = document.querySelector('#clear')
let deleteButton = document.querySelector('#delete')
let addition = document.querySelector('#addition')
let subtraction = document.querySelector('#subtraction')
let multiplication = document.querySelector('#multiply')
let division = document.querySelector('#divide')
let powering = document.querySelector('#power')
let point = document.querySelector('#point')
let history = document.querySelector('.history')
let equal = document.querySelector('.equal')

let input = document.querySelector('.input-screen')

let buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9]

// EVENTS 

let number1
let number2
let operator
let result
let operationActive = 0;
let decimalActive = 0;

buttons.forEach(element => {
    element.addEventListener('click', () => {
        let value = element.innerHTML
        input.innerText += value
    })
});

equal.addEventListener('click', () => {
    if (operator === '+') {
        number2 = input.innerText
        input.innerText = add(number1, number2)
        history.innerText = ' '
        operator = ''
        operationActive--
    }
    else if (operator === '-') {
        number2 = input.innerText
        input.innerText = subtract(number1, number2)
        history.innerText = ' '
        operator = ''
        operationActive--
    } else if (operator === '*') {
        number2 = input.innerText
        input.innerText = multiply(number1, number2)
        result = input.innerHTML
        history.innerText = ' '
        operator = ''
        operationActive--
    } else if (operator === '/') {
        number2 = input.innerText
        input.innerText = divide(number1, number2)
        result = input.innerHTML
        if(result === `They are watching! 📺`){
            return operationActive++
        }
        history.innerText = ' '
        operator = ''
        operationActive--
    }
})


point.addEventListener('click',()=> {
    if(decimalActive === 0 && input.innerText !== '') {
        input.innerText += '.'
        decimalActive++
    }
})
clearButton.addEventListener('click', () => {
    input.innerText = ''
    history.innerText = ''
    number1 = ''
    number2 = ''
    decimalActive = 0;
    operationActive = 0;
    result = ''
})

deleteButton.addEventListener('click', () => {
    let inputText = input.innerText
    inputText = inputText.slice(0, -1)
    input.innerText = inputText
})


addition.addEventListener('click', () => {
    if (operationActive === 0) {
        operator = '+'
        number1 = input.innerText
        input.innerText = ''
        history.innerText = number1 + ' ' + operator
        operationActive++
        decimalActive = 0;
    }
}
)

subtraction.addEventListener('click', () => {
    if (operationActive === 0) {
        operator = '-'
        number1 = input.innerText
        input.innerText = ''
        history.innerText = number1 + ' ' + operator
        operationActive++
        decimalActive = 0;
    }
})

multiplication.addEventListener('click', () => {
    if (operationActive === 0) {
        operator = '*'
        number1 = input.innerText
        input.innerText = ''
        history.innerText = number1 + ' ' + operator
        operationActive++
        decimalActive = 0;
    }
})

division.addEventListener('click', () => {
    if (operationActive === 0) {
        operator = '/'
        number1 = input.innerText
        input.innerText = ''
        history.innerText = number1 + ' ' + operator
        operationActive++
        decimalActive = 0;
    }
})
function add(number1, number2) {
    result = (+number1) + (+number2)
    if(result % 1 !== 0) {
        return result.toFixed(3)
    } else return result
}

function subtract(number1, number2) {
    result = (+number1) - (+number2)
    if(result % 1 !== 0) {
        return result.toFixed(2)
    } else return result
}

function multiply(number1, number2) {
    result = (+number1) * (+number2)
    if(result % 1 !== 0) {
        return result.toFixed(2)
    } else return result
}

function divide() {
    if (number2 === '0') { return result = `They are watching! 📺` }
    result = (+number1) / (+number2)
    if(result % 1 !== 0) {
        return result.toFixed(2)
    } else return result
    
}

function power() {
    
}





