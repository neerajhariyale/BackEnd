const Blog = require("../models/Blog")


exports.createBlog = async(req,res) => {
    try{
        const {blogtitle , description , name , like , comment } = req.body;
        const response = await Blog.create({blogtitle , description , name , like , comment});
        res.status(200)
        .json({
            success:true,
            data:response,
            message:"Entry Created Succesfully"
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