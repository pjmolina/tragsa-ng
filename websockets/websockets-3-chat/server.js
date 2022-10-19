var WebSocketServer = require('websocket').server;
var http = require('http');

// Gestion del estado
var clientes = {};

 
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});
 
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
 
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    var connection = request.accept('chat-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');

    // Gestionar conexiones (enrolar / subscribir)
    const key = request.key;
    clientes[key] =  { connection, key, nick: null };

    connection.on('message', function(message) {
        var content = JSON.parse(message.utf8Data); 
        if (content.channel === 'commands' && content.message === '#HELO#') {
            var nick = content.clientId;
            clientes[key].nick = nick;

            broadcast({
                channel: 'general',
                clientId: 'system',
                message: nick + ' is connected. There are ' + Object.keys(clientes).length + ' users connected.'
            });

        } else {
            broadcast(content);
        }
    });

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected. Reason:' + reasonCode + ' Description: ' + description );

        // Desenrolar / desuscribir
        const nick = clientes[key].nick;
        broadcast({
            channel: 'general',
            clientId: 'system',
            message: nick + ' was disconected. There are still ' + (Object.keys(clientes).length - 1) + ' users connected.'
        });

        delete clientes[key]
    });
    connection.on('error', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' error. Reason:' + reasonCode + ' Description: ' + description );
        // delete clientes[key]
    });

});


function broadcast(msg) {
    const payload = JSON.stringify(msg);
    console.log('Broadcasting to ', Object.keys(clientes).length, ' clientes.', payload);

    Object.values(clientes).forEach(v => {
        v.connection.send(payload);
    });
}