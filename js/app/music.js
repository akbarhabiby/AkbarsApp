let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let score = 0
let songs = 1


const play1 = () => {
    document.getElementById('myAudio').play()
    document.getElementById('myAudio').onended = play2()
}

const play2 = () => {
    document.getElementById('currentmusic').src = "music/dalla-dalla.mp3"
    document.getElementById('myAudio').play()
    document.getElementById('myAudio').onended = function() {
        document.getElementById('currentmusic').src = "music/paris-in-the-rain.mp3"
        play3()
    }
}

const play3 = () => {
    document.getElementById('myAudio').play()
}

const musik1 = () => {
    score++
    first.disabled = true
    first.style.backgroundColor = 'green'
    second.style.backgroundColor = 'gray'
    third.style.backgroundColor = 'gray'
    document.getElementById('result').innerText = score
}

const musik2 = () => {
    first.style.backgroundColor = 'green'
    second.style.backgroundColor = 'gray'
    third.style.backgroundColor = 'gray'
}

const musik3 = () => {
    first.style.backgroundColor = 'green'
    second.style.backgroundColor = 'gray'
    third.style.backgroundColor = 'gray'
}

first.addEventListener('click', musik1)
second.addEventListener('click', musik2)
third.addEventListener('click', musik3)
