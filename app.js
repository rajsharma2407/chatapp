const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const ejs = require('ejs');
const formatMessage = require('./utils/messages');

var user = ''; 
app.set('view engine','ejs');
app.use(express.static('public'));

io.on('connection',socket=>{
    socket.on('user',user=>{
        user:user
    socket.emit('message',formatMessage('i chat',`welcome ${user}`));
    socket.broadcast.emit('message',formatMessage('i chat',`${user} joined the chat`));

    socket.on('disconnect',()=>{
        io.emit('message',formatMessage(user,'leave the chat'));
    })
    socket.on('chatroom',msg=>{
        io.emit('message',formatMessage(user,msg));
    })
});

})
app.get('/',(req,res)=>{
    res.render('layout');
})
server.listen(8080,console.log('server is started at port 8080'));