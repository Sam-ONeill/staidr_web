const uuid = require('uuid/v4')

const isUser = ( users, nickname ) => nickname in users

const createUser = ( nickname, socketId ) => ({ nickname, socketId })

const addUsers = ( users, user ) => {
    console.log("methods"+ JSON.stringify(user));
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

module.exports = {
    isUser,
    createUser,
    addUsers,
    createChat,
    delUser,
    createMessage,
    isChannel
}
