const uuid = require('uuid/v4')
const mongoose = require("mongoose");
const messageModel = require("./db/message_model");
const {ObjectId} = require("mongodb");

const isUser = ( users, nickname ) => nickname in users

const createUser = ( nickname, socketId ) => ({ nickname, socketId })

const addUsers = ( users, user ) => {
    //console.log("methods"+ JSON.stringify(user));
    users[ user.nickname ] = user
    return users
}

const createChat = ({ name, description = 'Public Room'} = {}) => ({
    name,
    description,
    messages: [],
    msgCount: 0,
    typingUser: []
})

const isChannel = ( channelName, chats ) => chats.includes( channelName )


const delUser = ( users, nickname ) => {
    delete users[ nickname ]
    return users
}

const createMessage = ( message, sender ) => ({
    id: uuid(),
    time: new Date(Date.now()),
    message,
    sender
})

const sendToDb = (message, channel) => ({
    Room_name: channel,
    Edited_flag: false,
    Is_image: false,
    Group_id: "62e2a4e91e36529e05c90185",
    Current_message: message.message,
    Original_message: message.message,
    User: {
        Email: message.sender,
    },
    createdAt: message.time,
})

const pushToDB =(message) => {
    const newMsg = new messageModel(message);
    newMsg.save(function (error){
        if (error) console.log(error);
    })

}

 async function getMessages (string){
    let docArray =[];
    console.log("function called" + string);
    messageModel.find({Group_id: ObjectId("62e2a4e91e36529e05c90185")},function (err, docs){
    if (err) return console.log(err);
    if(docs){
        console.log("in if");
    }
    //console.log("out if " + docs);
         docArray = docs;})
     console.log("heya hiya" + docArray);
     return docArray;
}



module.exports = {
    isUser,
    createUser,
    addUsers,
    createChat,
    delUser,
    createMessage,
    isChannel,
    sendToDb,
    pushToDB
    //getMessages
}
