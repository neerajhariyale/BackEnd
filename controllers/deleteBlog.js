const Blog = require("../models/Blog")


exports.deleteBlog = async(req,res) => {
    try{
        const {id} = req.params;
        const {blogtitle , description , name , like , comment } = req.body;

        const response = await Blog.findByIdAndDelete(id);

        res.status(200)
        .json({
            success:true,
            data:response,
            message:"Blog Deleted Succesfully"
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