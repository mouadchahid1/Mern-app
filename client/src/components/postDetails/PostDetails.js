import React,{useEffect} from 'react'; 
import {useNavigate,useParams} from "react-router-dom"  ;
import {useDispatch,useSelector} from "react-redux" ; 
import {Paper , Typography,CircularProgress , Divider} from "@material-ui/core"
import useStyles from "./styles" ; 
import moment from "moment" ;  
import { getPost, getPostBySearch} from '../../actions/posts';
import CommentSection from './CommentSection';
const PostDetails = () => { 
  const classes = useStyles() ; 
  const {post,posts,isLoading}  = useSelector((state)=>state.posts); 
   
  const navigate = useNavigate() ; 
  const dispatch = useDispatch() ; 
  const {id} = useParams();   

  useEffect(()=> { 
    dispatch(getPost(id)) ;
  },[id,dispatch]);  
  
  
  // useEffect(()=>{ 
  //   if(post) {
  //     dispatch(getPostBySearch({search : "none",tags : post?.tags.join(',') }));
  //   }
  //  },[post,dispatch]);
  if(!post) return null ; 
   
  
  const openPost = (id) => { 
    navigate(`/posts/${id}`)
  }

  if(isLoading) { 
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
             <CircularProgress size="5em"  />
      </Paper>
    )
  } 

  const recommendedPosts= posts.filter(({_id})=>_id !== post._id);

  
  return (
  <Paper style={{padding : "20px",borderRadius : "15px"}} elevation={6}>
       <div className={classes.card}>
          <div className={classes.section}> 
             <Typography variant='h3' component="h2" >{post.title}</Typography> 
             <Typography gutterBottom variant='h6' color="textSecondary" component="h2">{post.tags}</Typography> 
             <Typography gutterBottom variant='body1'   component="p">{post.message}</Typography>
             <Typography variant='h6'   >Created by :{post.name}</Typography> 
             <Typography variant='body1'   >{moment(post.createdAt).fromNow()}</Typography>  
             <Divider style={{margin : "20px 0"}} /> 
             <Typography variant='body1'   ><strong>Realtime ! Chat coming soon!</strong></Typography> 
             <Divider style={{margin : "20px 0"}} /> 
             <CommentSection post = {post} />
             <Divider style={{margin : "20px 0"}} /> 
          </div> 
          <div className={classes.imageSection}>  
           <img className={classes.media} src={post.selectedFile} alt={post.title}  />
          </div>
       </div> 
       {recommendedPosts.length && ( 
        <div className={classes.section}>
         <Typography gutterBottom variant='h6'> You might also like :</Typography>  
         <Divider />
          <div className={classes.recommendedPost}>
          {
            recommendedPosts.map(({_id , title , name ,selectedFile , message , likes})=> ( 
              <div style={{margin :" 20px" ,cursor : "pointer"}} onClick={()=>openPost(_id)} key={_id}> 
               <Typography gutterBottom variant='h6'> {title}</Typography> 
               <Typography gutterBottom variant='subtitle2'> {name}</Typography>  
               <Typography gutterBottom variant='subtitle2'> {message}</Typography> 
               <Typography gutterBottom variant='subtitle1'><span style={{color: "gris"}}>Likes</span> <span style={{color:"red"}}>{likes.length}</span></Typography> 
               <img src={selectedFile} alt={title} style={{width : "200px"}} />
              </div>
            ))
          }
          </div>
        </div>
       )}
  </Paper>
  )
}

export default PostDetails;