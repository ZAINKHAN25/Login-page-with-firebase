const firebaseConfig = {
  apiKey: "AIzaSyCY0xwK3p1HAntQksizgO89wWYvQxs_Exc",
  authDomain: "clone-2d1d3.firebaseapp.com",
  databaseURL: "https://clone-2d1d3-default-rtdb.firebaseio.com",
  projectId: "clone-2d1d3",
  storageBucket: "clone-2d1d3.appspot.com",
  messagingSenderId: "642460439261",
  appId: "1:642460439261:web:e5eb16fdd7cc9782864134",
  measurementId: "G-MV97NGV74X"
};


firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
