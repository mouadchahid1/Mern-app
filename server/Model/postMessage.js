import mongoose from "mongoose"; 

const PostSchema = new  mongoose.Schema({ 
    title: String, 
    message: String, 
    creator: String, 
    tags: [String],   
    selectedFile: String, 
    likeCount: { 
        type: String, 
        default: 0 
    }
}, {timestamps:true}); 

const PostMessage = mongoose.model("PostMessage", PostSchema); 
export default PostMessage;