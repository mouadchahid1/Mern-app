import axios from "axios" ; 
//create  un url de base 
const API  = axios.create({baseURL : "http://localhost:5000"});  

// envoie une fontction apres que les api son execute 

export const fetchPosts =  () => API.get("/posts") ;

export const createPost = (postData) => API.post("/posts",postData) ; 

export const updatePost = (id,postupdated) => API.patch(`/posts/${id}`,postupdated); 
 
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`) ;  

export const signIn  = (formData) => API.post("/auth/signin",formData); 

export const signUp = (formData) => API.post("/auth/signup",formData);