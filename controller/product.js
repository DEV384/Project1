const Product = require("../models/Product");

const getAllProducts = async (req , res) => {

    const { company,name, sort , select} = req.query; 
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options: "i"};
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortfix = sort.split(",").join(" ");
        apiData = apiData.sort(sortfix);
    }
    if(select){
        // let selectfix = select.replace(","," ");
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;


    apiData = apiData.skip(skip).limit(limit);


    const Products = await apiData;
    res.status(200).json({Products,nbHits: Products.length});
};

const getAllProductsTesting = async (req , res) => {
    const Products = await Product.find(req.query);
    res.status(200).json({Products});
};

module.exports = { getAllProducts , getAllProductsTesting };