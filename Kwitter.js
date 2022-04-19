function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user name", user_name);
    window.location = "Kwitter_room.html";
}
