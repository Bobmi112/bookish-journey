var firebaseConfig = {
  apiKey: "AIzaSyAWeL6K3NKJhO8eyZFy_CT2sJmfs7pcnBQ",
  authDomain: "social-project-91457.firebaseapp.com",
  databaseURL: "https://social-project-91457-default-rtdb.firebaseio.com",
  projectId: "social-project-91457",
  storageBucket: "social-project-91457.appspot.com",
  messagingSenderId: "222722526374",
  appId: "1:222722526374:web:9bbb4363a1ff66d890f867"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser() {

   username = document.getElementById("username").value;
     localStorage.setItem("username", username);
    window.location = "Kwitter-room.html";
  }
