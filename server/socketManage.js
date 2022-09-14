const events = require('../src/events')
const methods = require('./methods')
let users = {}
let chatsList = ['Community','Apples', 'Pears','Oranges','Bananas','Kiwis','Peaches','Grapes','Apricots']
let communityChat = methods.createChat({ name: 'Global' })
let Blue = methods.createChat({name: 'Blue'})
let Green = methods.createChat({name:'Green'})
let Red = methods.createChat({name:'Red'})
let Purple = methods.createChat({name:'Purple'})
let Yellow = methods.createChat({name:'Yellow'})
let Orange = methods.createChat({name:'Orange'})
let Pink = methods.createChat({name:'Pink'})






let chats = [ communityChat,Blue,Green,Red,Pink,Purple,Yellow,Orange ]
let msg =[]
module.exports = io => socket => {

    socket.on( events.IS_USER, ( nickname, cb ) => {
        methods.isUser( users, nickname ) ? cb({ isUser: true, user: null }) :
        cb({ isUser: false, user: methods.createUser( nickname, socket.id )})
    })

    socket.on( events.NEW_USER, user => {
        users = methods.addUsers( users, user )
        socket.user = user
        io.emit( events.NEW_USER, { newUsers: users })
    })

    socket.on( events.INIT_CHATS, cb => {
       /* async function test () {
            let temp = await methods.getMessages("fuck");
            return temp;
        }
        console.log("we are here now " + test());
        const msg = test().then((data) =>JSON.stringify(data)).then((mssg) =>{
            return mssg;
        });
        const print=()=>{
            msg.then((a)=>{
                console.log(a);
            });
        };
        print();
        console.log("fuck it idc" + msg);

        */
        cb(chats)

        //pastChats.forEach(element => console.log(element));

       // io.emit()
    })

    socket.on( events.LOGOUT, () => {
        users = methods.delUser( users, socket.user.nickname )
        io.emit( events.LOGOUT, { newUsers: users, outUser: socket.user.nickname}  )
    })

    socket.on( 'disconnect', () => {
        if( socket.user ){
            users = methods.delUser( users, socket.user.nickname )
            io.emit( events.LOGOUT, { newUsers: users, outUser: socket.user.nickname} )
        }
    })

    socket.on( events.MESSAGE_SEND, ({ channel, msg }) => {
        let message = methods.createMessage( msg, socket.user.nickname )
        io.emit( events.MESSAGE_SEND, ({ channel, message }))
        //console.log(channel);
       // console.log(socket.user);
        let DBmessage = methods.sendToDb(message, channel);
        methods.pushToDB(DBmessage);
    })

    socket.on( events.TYPING, ({ channel, isTyping }) => {
        socket.user && io.emit( events.TYPING, { channel, isTyping, sender: socket.user.nickname })
    })

    socket.on( events.P_MESSAGE_SEND, ({ receiver, msg }) => {
        if( socket.user ){
            let sender = socket.user.nickname
            let message = methods.createMessage( msg, sender )
            socket.to( receiver.socketId ).emit( events.P_MESSAGE_SEND, { channel:sender, message })
            socket.emit( events.P_MESSAGE_SEND, { channel: receiver.nickname, message })
        }
    })

    socket.on( events.P_TYPING, ({ receiver, isTyping}) => {
        let sender = socket.user.nickname
        socket.to( receiver ).emit( events.P_TYPING, { channel: sender, isTyping })
    })

    socket.on( events.CHECK_CHANNEL, ({ channelName, channelDescription }, cb ) => {
        if( methods.isChannel( channelName, chatsList ) ){
            cb( true )
        } else {
            let newChat = methods.createChat({ name: channelName, description: channelDescription })
            chatsList.push( channelName )
            chats.push( newChat )
            io.emit( events.CREATE_CHANNEL, newChat )
            cb( false )
        }
    })
}
