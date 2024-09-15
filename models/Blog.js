const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        blogtitle:{
            type:String,
            require:true,
            maxLength:50,
        },
        description:{
            type:String,
            require:true,
            maxLength:50,
        },
        name:{
            type:String,
            require:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now()
        },
        like:{
            type:Number,
            require:true,
            maxLength:200,
        },
        comment:{
            type:String,
            require:true,
            maxLength:500
        },

    }
);


module.exports = mongoose.model("Blog" , blogSchema);