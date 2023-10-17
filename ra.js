var firebaseConfig = {
    apiKey: "AIzaSyBD2MZ2MwSfCyMCCe4-rJXKhiuEGakjTJE",
    authDomain: "eyebook-5dfc7.firebaseapp.com",
    databaseURL: "https://eyebook-5dfc7-default-rtdb.firebaseio.com",
    projectId: "eyebook-5dfc7",
    storageBucket: "eyebook-5dfc7.appspot.com",
    messagingSenderId: "1074451805108",
    appId: "1:1074451805108:web:bd8832878a90dc4564f8e1",
    measurementId: "G-1XTT6VK05P"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bienvenido " + user_name;
function agregar(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"Agrege el nombre de tu sala"
});
localStorage.setItem("room_name", user_name);
window.location = "dona.html"
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Inicio del código
        console.log("Nombres de salas -" + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

        //Final del código
        }); }); }
    getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "dona.html";
}
function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}