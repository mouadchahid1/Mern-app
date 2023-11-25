import axios from "axios" ; 
//create  un url de base 
const API  = axios.create({baseURL : "http://localhost:5000"});  

// envoie une fontction apres que les api son execute 
API.interceptors.request.use((req)=> {
     if(localStorage.getItem("profile")) { 
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
     } 
     return req ;
}) ; 
export const getPost = (id) => API.get(`/posts/${id}`) ; 


export const fetchPosts =  (page) => API.get(`/posts?page=${page}`) ; 

export const fetchPostsBySearch = (searchQuery) =>  API.get(`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);

export const createPost = (postData) => API.post("/posts",postData) ; 

export const updatePost = (id,postupdated) => API.patch(`/posts/${id}`,postupdated); 
 
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`) ;   

export const comment =(value , id) => API.post(`/posts/${id}/comment`,{value}) ;

export const signIn  = (formData) => API.post("/auth/signin",formData); 

export const signUp = (formData) => API.post("/auth/signup",formData);

