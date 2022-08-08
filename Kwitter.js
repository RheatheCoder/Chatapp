var firebaseConfig = {
    apiKey: "AIzaSyAjRhrlIsytiL7p8je8CsItKWAi3B30qGY",
    authDomain: "lets-chat-app-7c6a0.firebaseapp.com",
    databaseURL: "https://lets-chat-app-7c6a0-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-7c6a0",
    storageBucket: "lets-chat-app-7c6a0.appspot.com",
    messagingSenderId: "533839468990",
    appId: "1:533839468990:web:7fbb3b5eeac0ce4c6241ef"
  };
  
  firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user name", user_name);
    window.location = "Kwitter_room.html";
}
