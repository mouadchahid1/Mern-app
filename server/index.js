import express from "express" 
import bodyParser from "body-parser" 
import cors from "cors" 
import mongoose from "mongoose"  ; 
import PostRouter from "./routes/posts.js";

const app = express() ;   

app.use("/posts",PostRouter)
app.use(bodyParser.json({limit:"30mb" , extended : true})) ;   
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors()) ;

const CONNECTION_URL = "mongodb+srv://mouadchahid05:mouad05@hinditp.0s2fpgo.mongodb.net/?retryWrites=true&w=majority" ;  
const PORT = process.env.PORT || 5000 ;
mongoose.connect(CONNECTION_URL,{useNewUrlParser : true , useUnifiedTopology : true }) 
.then(() =>app.listen(PORT,()=> {console.log(`app is listen on ${PORT}`)})) 
.catch((error)=>{console.log(error.message)}); 

 