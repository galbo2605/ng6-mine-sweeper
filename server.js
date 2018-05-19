const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

const {isRealString} = require('./utils/validation');
const {users} = require('./utils/users');
const {generateMessage} = require('./utils/message');

io.on('connection', (socket) => {
  console.log('user connected', socket.id);

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and Room are required!');
    }

    socket.join(params.room);
    try {
      users.removeUser(socket.id);
    } catch (e) {
    }
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat :]'));
    socket.broadcast.to(params.room)
      .emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
    callback();
  });

  socket.on('createMessage', (message, callback) => {
    const user = users.getUser(socket.id);

    if (user && isRealString(message.text)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
    }

    callback();
  });

  socket.on('disconnect', () => {
    try {
      const user = users.removeUser(socket.id);


      if (user) {
        io.to(user.room).emit('updateUserList', users.getUserList(user.room));
        io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
      }
    } catch (e) {
    }
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
