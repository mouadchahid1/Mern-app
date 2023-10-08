import express from "express" ;
const router = express.Router() ; 
import {getPost ,createPost } from "../controllers/postController.js"
 

router.get("/" ,getPost);   
router.post("/create",createPost);

export default router;