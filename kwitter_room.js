user_name = localStorage.getItem("user_name");

function addRoom(){
   room_name = document.getElementById ("room_name").value ;
   localStorage.setItem("room_name", room_name);
   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
window.location ("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
row = "<div class='room_name' id="+ Room_names + " onclick= 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
      });});}
getData();

function redirectToRoomName(name){
   localStorage.setItem("room_name", name);
   console.log("name");
   window.location ("kwitter_page.html");
}
