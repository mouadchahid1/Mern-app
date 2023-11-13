import User from "../Model/User.js" ; 
import bcrypt from "bcryptjs" ; 
import jwt from "jsonwebtoken"
export const signin = async(req,res) => { 

 
 try { 
  const {email , password} = req.body ;  
 
        const userExists = await User.findOne({email}) ; 
        if(!userExists) {
          return res.status(404).json({message : "user Not found "})
        } 
        const passwordCorrect = await bcrypt.compare(password,userExists.password) ;
        if(!passwordCorrect) {
        return   res.status(400).json({message : "email or password is faild"})
        }  
        const token = jwt.sign({email : userExists.email , id : userExists._id},"test",{expiresIn:"5h"})
        res.status(200).json({result : userExists, token});

 } catch (error) {
    res.status(500).json({message : "somthing went wrong "});
 }
}  


export const signup = async (req,res) => {  
    // destractuion data from request 
     
      
      
    try {  
      const  {firstname,lastname, password ,cpassword,email} = req.body ;   
        // si email exist deja 
        console.log(req.body)
        const userExists = await User.findOne({email})  

        if(userExists) return res.status(400).json({message : "user already exists"}) ;   
        // si le password et differente 

        if(password !== cpassword) return  res.status(400).json({message : "password does not match"}) 

        // apres ca on doit hasher le password  
       const   passwordHash = await bcrypt.hash(password,10) ;   

       // create the user 
        const result = await User.create({email : email , password : passwordHash, name :`${firstname} ${lastname}`}) 
        // create the token 

        const token = jwt.sign({email : result.email , id : result._id},"test", {expiresIn : "5h"}) ;
        // send the request 

        res.status(200).json({result ,token});
    } 
    catch (error) {
      res.status(500).json({message : "somthing went wrong "});
        
    }      
}