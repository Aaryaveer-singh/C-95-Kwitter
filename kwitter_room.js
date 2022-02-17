var firebaseConfig = {
      apiKey: "AIzaSyBP5URB16GZIal8gpbKD2Q5mjPv82CyDqI",
      authDomain: "kwitter-3a98e.firebaseapp.com",
      databaseURL: "https://kwitter-3a98e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a98e",
      storageBucket: "kwitter-3a98e.appspot.com",
      messagingSenderId: "207609264061",
      appId: "1:207609264061:web:a5a3aec33edc347008c4d4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='room_name' onclick='redirect(this.id)' id='"+Room_names+"'>"+Room_names+"</div> <hr>"
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();
user_name=localStorage.getItem("user_name_key");
document.getElementById("user_name").innerHTML="welcome "+ user_name;

function log_out(){
      window.location="index.html";
}