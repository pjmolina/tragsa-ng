var WebSocketServer = require('websocket').server;
var http = require('http');

// Gestion del estado
var clientes = {};
var estado = {
    temperatura: 20,
    humedad: 50
};
 
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
    var connection = request.accept('iot-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');

    // Gestionar conexiones (enrolar / subscribir)
    const key = request.key;
    clientes[key] =  { connection, key };

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected. Reason:' + reasonCode + ' Description: ' + description );

        // Desenrolar / desuscribir
        delete clientes[key]
    });
    connection.on('error', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' error. Reason:' + reasonCode + ' Description: ' + description );
        // delete clientes[key]
    });

});

function generarDatos() {
    estado.temperatura += Math.floor((Math.random() * 10) - 5)/ 10;  
    estado.humedad += Math.floor((Math.random() * 10) - 5) / 5;  

    broadcast(estado);

    setTimeout(() => {
        generarDatos();
    }, 5000)
}

generarDatos();


function broadcast(estado) {
    const payload = JSON.stringify({
        temperatura: estado.temperatura,
        humedad: estado.humedad,
        t: new Date().toISOString()
    });
    console.log('Broadcasting to ', Object.keys(clientes).length, ' clientes.', payload);

    Object.values(clientes).forEach(v => {
        v.connection.send(payload);
    });
}