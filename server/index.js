import express from "express" 
import bodyParser from "body-parser" ;
import cors from "cors" ; 
import mongoose from "mongoose"  ; 
import PostRouter from "./routes/posts.js";  
import AuthRouter from "./routes/auth.js";
import dotenv from "dotenv"; 

const app = express() ;  
dotenv.config() ;

app.use(bodyParser.json({limit:"30mb" , extended : true})) ;   
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors()) ;

app.use("/posts",PostRouter) ;
app.use("/auth",AuthRouter) ;
const PORT = process.env.PORT || 5000 ;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser : true , useUnifiedTopology : true }) 
.then(() =>app.listen(PORT,()=> {console.log(`app is listen on ${PORT}`)})) 
.catch((error)=>{console.log(error)}); 

 