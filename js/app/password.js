let username = document.getElementById('username')
let passwordHTML = document.getElementById('password')
let passRandom = 0
let passLength;
let generate = document.getElementById('button')
let register = document.getElementById('register')
username.placeholder = loggedIn

// generate.addEventListener('click', function() {
//     console.log(password.value)
//     console.log('hi')
// })

// password.addEventListener('keyup', function() {
//     let currPass = password.value
//     let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let numbers = '0123456789'
//     let symbol = '~!@#$%^&*()_+`-=[]{}\|;",./<>?'
//     let symbolIsTrue = false
//     for (let i = 0; i < currPass.length; i++) {
//         // console.log(symbolIsTrue)
//         if (!symbolIsTrue) {
//             for(let j = 0; j < symbol.length; j++) {
//                 if (currPass[i] !== symbol[j]) {
//                     console.log('Should be containing symbol')
//                 } else {
//                     symbolIsTrue = true
//                     break
//                 }
//             }
//         }
//     }
// })

// Generate Password
generate.addEventListener('click', function () {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let symbol = '~!@#$%^&*()_+`-=[]{}\|;",./<>?'
    let numbers = '0123456789'
    let password = []
    let result = ''
    //
    if (document.getElementById('pass8').checked) {
        passLength = document.getElementById('pass8').value;
    } else if (document.getElementById('pass16').checked) {
        passLength = document.getElementById('pass16').value;
    } else if (document.getElementById('pass32').checked) {
        passLength = document.getElementById('pass32').value;
    }
    if (passLength > 0) {
        passRandom++
    } else {
        alert ('You should pick the length!')
    }
    //
    for (let i = 0; i < passLength; i++) {
        let symbomRandom = Math.floor(Math.random() * symbol.length);
        let charRandom = Math.floor(Math.random() * characters.length);
        let numRandom = Math.floor(Math.random() * numbers.length)
        let randomizer = [
            symbol[symbomRandom],
            characters[charRandom],
            numbers[numRandom]
        ]
        let randomizerPass = Math.floor(Math.random() * randomizer.length)
        password[i] = randomizer[randomizerPass]
    }
    for (let i = 0; i < password.length; i++) {
        result += password[i]
    }
    if (passRandom < 4) {
        passwordHTML.value = result
    } else {
        alert ('You can only randomize 3x')
    }
})

// Adding user data to password-register.js
// register.addEventListener('click', function () {
//     console.log('hi')
//     $.getScript('password-register.js', function()
//     {
//         data.username.push(username)
//         data.password.push(result)
//     });
// })