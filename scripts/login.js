"use strict";

let token = localStorage.getItem('token')
if(!token) {
    location.replace('index.html')
}

$('#logout').addEventListener('click', (e) => {
    localStorage.removeItem('token')
    location.replace('index.html')
})