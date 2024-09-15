const Blog = require("../models/Blog")


exports.getBlogById = async(req,res) => {
    try{

      const blog = await Blog.find({});
        
        //response
        res.status(200)
        .json({
            success:true,
            data:blog,
            message:"Entire Blog is Fetched Succesfully"
        })
    }
    catch(error){
        console.log(error)
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            message:error.message,
        })
    }
}