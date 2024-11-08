import mongoose from "mongoose"
import PostMessage from "../Model/PostMessage.js"
 
export const getPosts = async (req,res) => { 
     const {page} = req.query ;
      try 
      {     
          const limit = 8 ; 
          const startIndex = (Number(page) - 1) *8 ;  // le post ou va comment la deuxieme pagination 
           const total = await PostMessage.countDocuments({}) ; 

      const posts  = await PostMessage.find().sort({_id : -1}).limit(limit).skip(startIndex); 

      res.status(200).json({data : posts , currentPage : Number(page) , NumberOfPages : Math.ceil(total / limit)}); 

      } catch (error) {
      res.status(404).json({message : error.message})
      } 
}  
export const getPostBySearch =async(req,res) => { 
    try {
       const {searchQuery,tags} = req.query ; 

       const title = new RegExp(searchQuery,"i") ; 

       const posts = await PostMessage.find({$or : [{title} , {tags : { $in : tags.split(",")}}]}); 

       res.json({data : posts}) ;

    } catch (error) {
     res.status(404).json({message : error.message})
    }
}

export const createPost  = async (req,res) => { 
     try 
      { 
        const post = req.body ;   

      const newPost = new PostMessage({...post , creator : req.UserId })  ; 
      await newPost.save() ; 
      res.status(200).json(newPost) ; 
      } 
     catch (error) 
     {
     res.status(409).json({message : error.message}) ;
     }
}  
export const updatePost = async (req,res) => {
      const {id : _id} = req.params ; 
      const body = req.body ; 
      //we check if the id exists 
      if(!mongoose.Types.ObjectId.isValid(_id)) { 
            res.status(404).send("Post Not Found");
      } 
      const newPostMessage = await PostMessage.findByIdAndUpdate(_id,{...body,_id},{new : true}) ;
        res.json(newPostMessage) ;
} 
export const deletePost =  async (req,res) => {
     const {id} = req.params ; 
     if(!mongoose.Types.ObjectId.isValid(id)) { 
      res.status(404).send("Post Not Found");
     } 
     await PostMessage.findByIdAndDelete(id) ; 
     res.json({message : "the post et supprimer succefuly "}) ;
} 
export const likePost = async (req,res) => {  
       
      if(!req.UserId) return res.status(403).json({message : "your are not authozite"}) ;
      const {id} = req.params ; 

       if(!mongoose.Types.ObjectId.isValid(id)) 
       { 
          return   res.status(404).send("Post Not Found");
       } 
       const post = await PostMessage.findById(id) ;  
       const index = post.likes.findIndex((id)=> id === String(req.UserId)); 
       if(index === -1) {
            post.likes.push(req.UserId);
       } 
       else {
            post.likes = post.likes.filter((id)=> id !== String(req.UserId));
       }
       const newPost = await PostMessage.findByIdAndUpdate(id,post,{new : true}) ; 
       res.json(newPost);
}
export const getPost = async (req,res) => { 
     const {id} = req.params; 
     try {
           const post = await PostMessage.findById(id) ; 
           res.status(200).json(post) ;
     }  
     catch (error) {
       res.status(404).json({message :error});   
     }
}
 
export const commentPost = async(req,res) => {  
     const {id} = req.params ;
     const {value} = req.body ;
      try { 
      const post = await PostMessage.findById(id) ;   
      post.comments.push(value) ; 
      const updatePost  = await PostMessage.findByIdAndUpdate(id,post,{new : true }) ; 
      res.status(200).json(updatePost) ;

          
      } catch (error) {
          res.status(404).json({message : "faild to write comment"});
      }
}
