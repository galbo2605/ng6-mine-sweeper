const express = require('express');
const app = express();

const http = require('http');
const socketIoServer = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(socketIoServer);

const socketIoPort = process.env.PORT || 3000;
const appPort = process.env.PORT || 8080;
const {join} = require('path');

const {isRealString} = require('./utils/validation');
const {generateMessage} = require('./utils/message');
const {Users} = require('./utils/users');
const users = new Users();

io.on('connection', (socket) => {
  console.log('user connected', socket.id);

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and Room are required!');
    }

    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat :]'));
    socket.broadcast.to(params.room)
      .emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
    callback();
  });

  socket.on('createMessage', (message, callback) => {
    const user = users.getUser(socket.id);

    if (user && isRealString(message)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, message));
    }

    callback();
  });

  socket.on('disconnect', () => {
    const user = users.removeUser(socket.id);
    console.log(user);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });
});

socketIoServer.listen(socketIoPort, () => {
  console.log(`Socket IO listening on socketIoPort: ${socketIoPort}`);
});

// Server static files from /browser
app.get('*.*', express.static(join(__dirname, 'dist/practice-app-one')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname + '/dist/practice-app-one/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || appPort, () => {
  console.log(`Node express listening on port ${appPort}`)
});
