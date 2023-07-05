import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyD37qfcYgBSAU8zuCY35o5Q8iYZoKjqosk",
  authDomain: "entertainment-5eccf.firebaseapp.com",
  projectId: "entertainment-5eccf",
  storageBucket: "entertainment-5eccf.appspot.com",
  messagingSenderId: "32397679149",
  appId: "1:32397679149:web:8b0e07d789012afa0b36a4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const text = document.querySelector('#text')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signupbtn = document.querySelector('.signupbtn')

signupbtn.addEventListener('click', signuphandler)


function signuphandler(){
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
  })
  .catch((error) => {
    console.log("Nahi chala mein kya kar le ga to");
  });

}