import mongoose from "mongoose"; 

const PostSchema = new  mongoose.Schema({ 
    title: String, 
    message: String,  
    name : String ,
    creator: String, 
    tags: [String],   
    selectedFile: String, 
    likes: { 
        type:[String], 
        default: [] , 
    } ,
    comments : {
        type : [String] , 
        default  : [] ,
    },
}, {timestamps:true}); 

const PostMessage = mongoose.model("PostMessage", PostSchema); 
export default PostMessage;