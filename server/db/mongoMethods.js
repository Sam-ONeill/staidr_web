const mongoose = require("mongoose");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const dbOpen = () => db.once('open', function() {
    console.log("Connection Successful! im in the mainframe");


    });




const insertMessages = (message) => message.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log(result)
    }
})

module.exports = {
    dbOpen,
    insertMessages,
}
