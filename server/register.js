import { createUserWithEmailAndPassword, getAuth } from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js';
import { doc, setDoc } from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js';

import { app, db } from './auth.js';

const auth = getAuth(app);

let registerNow = document.getElementById('register');

registerNow.addEventListener('click', () => {
    register();
});

let email = document.getElementById('email');
let password = document.getElementById('password');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let message = document.getElementById('wailMessage');

async function register() {
    email = email.value;
    password = password.value;
    fullname = fullname.value;
    username = username.value;

    try {
        // if (!fullname || !username || !email || !password || !confirmPassword) {

        //     message.textContent = 'fill all credentials';
        //     message.style.color = 'red'
        //     message.style.fontSize = '1em'

        // }

        const data = await createUserWithEmailAndPassword(auth, email, password);

        let userId = data.user.uid
        await setDoc(doc(db, 'users', userId), {
            name: fullname,
            username: username,
            email: email
        })
        // setTimeout(() => {     let message = document.getElementById('message');
        // message.textContent = 'Account Created Successfully ✔✔✔';
        // window.location.replace("../login/login.html") }, 3000)

        alert("Account Created Successfully")
        window
            .location
            .replace("../login/login.html")

    } catch (err) {
        if (err.message == "Firebase: Error (auth/email-already-in-use).") {
            alert("Email is taken")
        }
    }
}

username.addEventListener('focus', function () {
    errorMessage.textContent = '';
})
username.addEventListener('blur', function () {
    if (username.value.length < 5) {
        errorMessage.textContent = '❗Enter a valid username';
        errorMessage.style.color = 'red'
        errorMessage.style.fontSize = '0.7em'

    }
    setTimeout(function () {
        errorMessage.style.display = 'none';

    }, 3000)
})

username.addEventListener('keyup', function () {
    if (username.value.length >= 5) {
        errorMessage.textContent = '✔valid username';
        errorMessage.style.color = 'green'
    } else {
        errorMessage.textContent = '❌invalid username';
        errorMessage.style.color = 'red'
    }
    setTimeout(function () {
        errorMessage.style.display = 'none';

    }, 3000)
})
email.addEventListener('keyup', function () {
    let emailMessage = document.getElementById('email-message');
    let emailMatch = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailMatch.test(email.value)) {
        emailMessage.textContent = '✔Valid email';
        emailMessage.style.color = 'green';
    } else {
        emailMessage.textContent = ' ❌Invalid email';
        emailMessage.style.color = 'red';
    }
    setTimeout(function () {
        emailMessage.style.display = 'none';

    }, 5000)
})

// confirmPassword.addEventListener('keyup', function() {     let message =
// document.getElementById('message');     let confirmPassword =
// document.getElementById('confirmPassword').value;     password =
// document.getElementById('password').value;     if (password !=
// confirmPassword) {         message.textContent = ' ❌Invalid email';
// message.style.color = 'red';     } else {         message.textContent =
// '✔password match';         message.style.color = 'green'     }
// setTimeout(function() {         message.style.display = 'none';     }, 3000)
// })

registerNow.addEventListener('click', () => {
    register();
});