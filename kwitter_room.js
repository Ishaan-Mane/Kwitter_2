
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDHoVgQ7MJEXcHrcEm73W6OsmUrxAc8Pu8",
      authDomain: "kwitter-ecdfe.firebaseapp.com",
      databaseURL: "https://kwitter-ecdfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-ecdfe",
      storageBucket: "kwitter-ecdfe.appspot.com",
      messagingSenderId: "821378940438",
      appId: "1:821378940438:web:dda16e7b915b9872cb7f37"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
