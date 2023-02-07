var host = document.location.host;
var pathname = document.location.pathname;
var websocket = new WebSocket("ws://" +host  + pathname + "chat");


websocket.onmessage = function (event) {
    var data = JSON.parse(event.data);
    var message = data.username + ": " + data.messageDescription;
    document.getElementById("chatArea").innerHTML += message + "\n";
}

function sendMessage() {
    var username = document.getElementById("username").value;
    var message = document.getElementById("message").value;
    var json = {
        "username": username,
        "messageDescription": message
    };
    websocket.send(JSON.stringify(json));
}