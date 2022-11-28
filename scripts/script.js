"use strict";

    let token = localStorage.getItem("token")
if (token) {
    location.replace('login.html')
}


$('#form').addEventListener('submit', async (e) => {
    e.preventDefault()

    let tokenData = {}
    await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: $('#email').value,
            password: $('#password').value
        })
    }).then(resolve => resolve.json()).then(data => tokenData = data)
    
    
    if(tokenData.token) {
        localStorage.setItem('token', JSON.stringify(tokenData.token))
        location.replace('login.html')
    } else {
        alert('email or password error')
    }
})
