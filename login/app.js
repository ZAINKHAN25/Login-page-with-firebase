import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyD37qfcYgBSAU8zuCY35o5Q8iYZoKjqosk",
  authDomain: "entertainment-5eccf.firebaseapp.com",
  projectId: "entertainment-5eccf",
  storageBucket: "entertainment-5eccf.appspot.com",
  messagingSenderId: "32397679149",
  appId: "1:32397679149:web:8b0e07d789012afa0b36a4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


const loginemail = document.querySelector('#loginemail')
const loginpassword = document.querySelector('#loginpassword')
const loginbtn = document.querySelector('#loginbtn');

loginbtn.addEventListener('click', loginhandler);

function loginhandler(){
    signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Kya teer ukhar liye jo itne kush horhe ho");
      if(user){
        location.href = '../Dashbord/index.html'
      }
  })
  .catch((error) => {
    console.log("Nahi chala kya kar lo ge");
  });
}