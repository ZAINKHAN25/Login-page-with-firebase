import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD37qfcYgBSAU8zuCY35o5Q8iYZoKjqosk",
  authDomain: "entertainment-5eccf.firebaseapp.com",
  projectId: "entertainment-5eccf",
  storageBucket: "entertainment-5eccf.appspot.com",
  messagingSenderId: "32397679149",
  appId: "1:32397679149:web:8b0e07d789012afa0b36a4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function falto(){
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            document.querySelector('.body').innerHTML += doc.data().text + "<br />";
        });

}

falto()