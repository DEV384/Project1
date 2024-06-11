const mongoose = require("mongoose");

// uri = "mongodb+srv://Project1:dev189p7046@project1.yt4x1eh.mongodb.net/Project1?retryWrites=true&w=majority";


const connectDB = (uri)=> {

    console.log("connect DB");
    return mongoose.connect(uri);
};

module.exports = connectDB;