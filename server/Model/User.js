import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name : {type : String , required : true} ,
    email : {type : String , required : true } ,
    password : {type : String , required : true } , 
    id : {type : String}
}, {timestamps:true}) ; 
const User = mongoose.model("User", UserShema); 
export default User ;