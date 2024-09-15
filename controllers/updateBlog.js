const Blog = require("../models/Blog")


exports.updateBlog = async(req,res) => {
    try{
        const {id} = req.params;
        const {blogtitle , description , name , like , comment } = req.body;

        const blog = await Blog.findByIdAndUpdate(
            {_id:id},
            {blogtitle , description  , name , like , comment : Date.now()});
        
        //response
        res.status(200)
        .json({
            success:true,
            data:blog,
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