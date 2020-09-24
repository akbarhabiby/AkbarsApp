let loggedIn = innerHTML=localStorage.getItem('textvalue')
if (!loggedIn) {
    window.location.href = 'login.html'
}