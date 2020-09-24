let firstNum = document.getElementById('firstnumber')
let secondNum = document.getElementById('secondnumber')
let operation = document.getElementById('operation')
let button = document.getElementById('button')

button.addEventListener('click', function() {
    let result;
    switch(operation.value) {
        case 'add':
            result = Number(firstNum.value) + Number(secondNum.value)
            break;
        case 'minus':
            result = Number(firstNum.value) - Number(secondNum.value)
            break;
        case 'multiply':
            result = Number(firstNum.value) * Number(secondNum.value)
            break;
        case 'divide':
            result = Number(firstNum.value) / Number(secondNum.value)
            break;
    }
    document.getElementById('result').innerText = result
})
