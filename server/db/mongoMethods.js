const mongoose = require("mongoose");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const dbOpen = () => db.once('open', function() {
    console.log("Connection Successful! im in the mainframe");


    });
module.exports = {
    dbOpen,
}
