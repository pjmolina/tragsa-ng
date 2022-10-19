var clientName = 'Alice';
var client;

function logToPage(message) {
    var board = document.getElementById('board');
    board.innerHTML += message + '<br/>';   
}

function disconnect() {
    if (client) {
        client.close();
        logToPage('Closed connection.');
        client = null;
    }
}

function connect() {
    clientName = document.getElementById('name').value;
    client = new WebSocket('ws://localhost:8080/', 'iot-protocol');

    client.onerror = function() {
        logToPage('Connection Error');
    };
     
    client.onopen = function() {
        logToPage('WebSocket Client Connected. ID: ' + clientName);
    };
     
    client.onclose = function() {
        console.log('echo-protocol Client Closed. ID: ' + clientName);
        logToPage('echo-protocol Client Closed. ID: ' + clientName);
    };
     
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
            logToPage("Received: '" + e.data + "'");
        }
    };
}
