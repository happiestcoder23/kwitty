
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDkSR75C23-XZSNoia2Vp9pQoYInQH-Iy4",
      authDomain: "kwitter-eec8f.firebaseapp.com",
      databaseURL: "https://kwitter-eec8f-default-rtdb.firebaseio.com",
      projectId: "kwitter-eec8f",
      storageBucket: "kwitter-eec8f.appspot.com",
      messagingSenderId: "697879364424",
      appId: "1:697879364424:web:6d99e01e037544c625a97d",
      measurementId: "G-BN6YKXN5DX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page_html";
          
    }

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name = "+ room_names);
      row = "<div class='room_name' id="+ room_names+" onclick='redirectToRoomName(this.id)'>#" +room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";   
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

