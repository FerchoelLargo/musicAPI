/*var app = require('express')();
var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
);
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client 
    console.log('new client connected');
    
    socket.on('HELLO_THERE',()=>{
        socket.emit('WELCOME_FROM_SERVER', null);
    })

    socket.on('botonazo',()=>{
        console.log('botonazo')
    })
});




const cors = require('cors')
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))




*/