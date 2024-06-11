require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/Product");

const ProductJson = require("./product.json");

const start = async() =>{
    try{
        await connectDB();
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    }
    catch(error){
        console.log(error);
    }
};

start();