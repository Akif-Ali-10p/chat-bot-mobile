import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import path from 'path';


const __dirname = path.resolve();

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
});


// io.on('connection', (socket) => {
//   console.log(socket.id);
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//       io.emit('chat messages', msg);
//   });
// });

io.on('connection', (socket) => {
  console.log("Connected user: " + socket.id);
  const users = [];
  for (let [id] of io.of("/").sockets) {
    users.push(id);
  }

  socket.on(socket.id, (msg) => {
    console.log('recieved: ' + msg + ' from ' + socket.id);

    // send all clients except the sender
    for(var i = 0; i < users.length; i++) {
      if(users[i] !== socket.id) {
        console.log("sending to: " + users[i]);
        io.to(users[i]).emit(users[i], msg);
      }
    }
  });
  
});

// io.on("connection", (socket) => {
//   const users = [];
//   for (let [id, socket] of io.of("/").sockets) {
//     users.push({
//       userID: id,
//     });
//   }
//   socket.emit("users", users);
// });


server.listen(2800, () => {
  console.log('listening on *:2300');
});