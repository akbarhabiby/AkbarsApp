let username = document.getElementById('username')
let inputUsername = document.getElementById('username')
let submitButton = document.getElementById('button')

// Ketika key Enter / Return di tekan
username.addEventListener("keyup", event => {
    if(event.key === "Enter") {
        submitButton.click();
    }
});

// The Submit Button
submitButton.addEventListener('click', function() {
    let usernameInput = inputUsername.value
    let minChar = usernameInput.length >= 3
    let allowed = false
    for (let i = 0; i < usernameInput.length; i++) {
        let char = usernameInput[i]
        if (char === ' ') {
            allowed = false
            break
        } else {
            allowed = true
        }
    }
    if (allowed && usernameInput && minChar) {
        alert (`Hello ${usernameInput}!`)
        localStorage.setItem('textvalue', usernameInput) // Kirim value username
        window.location.href = 'index.html' // Redirect ke index
    } else if (!allowed) {
        alert (`Username cannot be containing a space!`)
    } else if (!minChar) {
        alert (`Username should more than 2 characters!`)
    } else {
        alert (`Username cannot be empty!`)
    }
})

