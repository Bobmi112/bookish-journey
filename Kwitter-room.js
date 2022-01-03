// Your web app's Firebase configuration
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
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Guten Tag und Wilkommen " + user_name + " !";

  function addroom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "add room name"
        });
        localStorage.setItem("room_name " , room_name);
        window.location = "Tic-tik-page.html";    
    } 



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room-name - " + Room_names);
    row = "<div class = 'room_name' id = "  + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name); 
window.location = "Tic-tik-page.html"
}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}