const express = require('express');
const cors = require('cors');
const app = express();

const server = app.listen(8000, () => 
    console.log('🔥The server is all fired up on port 8000!🔥'))
const io = require('socket.io')(server, { cors: true });

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/cardgame.routes')(app);

io.on("connection", socket => {
    console.log(socket.id);
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
        // Additional event listeners go here!
    })
})