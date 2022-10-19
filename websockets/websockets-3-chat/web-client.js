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
    client = new WebSocket('ws://localhost:8080/', 'chat-protocol');

    client.onerror = function() {
        logToPage('Connection Error');
    };
     
    client.onopen = function() {
        logToPage('WebSocket Client Connected. ID: ' + clientName);

        var payload = JSON.stringify({
            clientId: clientName,
            message: '#HELO#',
            channel: 'commands'
        });
        client.send(payload);
    };
     
    client.onclose = function() {
        console.log('chat-protocol Client Closed. ID: ' + clientName);
        logToPage('chat-protocol Client Closed. ID: ' + clientName);
    };
     
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");

            const c = JSON.parse(e.data);

            const pretty = `${c.channel}: from ${c.clientId}: ${c.message}` 
            logToPage(pretty);
        }
    };
}

function sendMessage() {
    var message = document.getElementById('message').value;
    var channel = document.getElementById('channel').value;
    if (client) {
        var payload = JSON.stringify({
            clientId: clientName,
            message,
            channel
        });
        client.send(payload);
    }
}