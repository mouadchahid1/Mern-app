import axios from "axios" ; 

const url = "http://localhost:5000/posts" ; 
export const fetchPosts =  () => axios.get(url) ;

export const createPost = (postData) => axios.post(url,postData) ; 

export const updatePost = (id,postupdated) => axios.patch(`${url}/${id}`,postupdated); 
 
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`) ; 