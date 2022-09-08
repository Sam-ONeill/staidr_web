const express = require('express')
const cors = require('cors');
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const socketManage = require('./socketManage')(io)
const DB='mongodb+srv://Admin:3l6hVrAju4s1Wu4N@cluster0.xw4pb.mongodb.net/staidr?retryWrites=true&w=majority'
const PORT = process.env.PORT || 80
const path = require('path')
const mongoose = require("mongoose");
const mongo = require("./db/mongoMethods");

io.on('connection', socketManage )
// In dev mode just hide hide app.uss(... ) below
app.use( express.static(path.join(__dirname, '../build')))
server.listen( PORT, () => console.log('App was start at port : ' + PORT ))
// Connect to the MongoDb database\
/*
app.use(cors({origin: true}));
app.use(express.json());
mongoose
    .connect(DB, {useNewUrlParser: true})
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

const Message = require('./db/message_model');
mongo.dbOpen();

*/
