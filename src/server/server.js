import Http from 'http';
import Path from 'path';
import Helmet from 'helmet';
import Express from 'express';
import SocketIO from 'socket.io';
import Compression from 'compression';

// Server setup.
const app = Express();
const server = Http.Server(app);
const io = SocketIO(server);
const port = process.env.PORT || 0;

// Fire up Helmet and Compression for better Express security and performance.
app.use(Helmet());
app.use(Compression());

// Add static file middleware (to serve static files).
app.use('/public', Express.static(Path.join(__dirname, '../public')));

// Request router.
app.get('/', function(request, response) {
   response.sendFile(Path.join(__dirname, '../public/index.html'));
})

// Tell server to start listening for connections.
server.listen(port, () => {
  console.log('\n🕺 server init complete, listening for connections on port ' + server.address().port + ' 💃\n');

  // Start listening for events from client.
  setServerHandlers();
});

/**
 * Setup server event handlers.
 */
function setServerHandlers() {
  io.on('connection', (socket) => {
    socket.emit('welcome');
  });
}
