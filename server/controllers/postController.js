import mongoose from "mongoose"
import PostMessage from "../Model/PostMessage.js"
export const getPost = async (req,res) => {
      try 
      {
      const postMessage  = await PostMessage.find() 
      res.status(200).json(postMessage)
      } catch (error) {
      res.status(404).json({message : error.message})
      } 
}
export const createPost  = async (req,res) => { 
     try 
      { 
      const post = req.body ;  
      const newPost = new PostMessage(post)  ; 
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
