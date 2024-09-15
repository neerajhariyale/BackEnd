const Blog = require("../models/Blog")


exports.commentById = async(req,res) => {
    try{
        const id = req.params.id;
        const blog = await Blog.findById(id,'comment')

        //data for given id not found
        if(!blog){
            return res.status(404)
            .json({
                success:false,
                message:"No DATA FOUND FOR GIVEN ID"
            })
        }
        
        //response
        res.status(200)
        .json({
            success:true,
            data:blog,
            message:`Blog Comment for  ${id} data successfully fetched`
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