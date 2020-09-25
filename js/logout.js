let loggedIn = innerHTML=localStorage.getItem('textvalue')
if (!loggedIn) {
    window.location.href = 'login.html'
} else {
    localStorage.setItem('textvalue', '') // Set to blank
    alert ('You have been successfully logged out!')
    window.location.href = 'login.html' // Redirect ke login page
}