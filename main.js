// Importing the required modules
const WebSocketServer = require('ws');
 
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })
 
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
        // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }

    var intervalId = setInterval(function() {
        var date = Date.now()
        ws.send(date)
    }, 5000);

    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has disconnected, stopping updates");
        clearInterval(intervalId)
    });

});
console.log("The WebSocket server is running on port 8080");
