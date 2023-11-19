import React,{useEffect} from 'react'; 
import {useNavigate,useParams} from "react-router-dom"  ;
import {useDispatch,useSelector} from "react-redux" ; 
import {Paper , Typography,CircularProgress , Divider} from "@material-ui/core"
import useStyles from "./styles" ; 
import moment from "moment" ;  
import { getPost} from '../../actions/posts';



const PostDetails = () => { 
  const classes = useStyles() ; 
  const {post,posts,isLoading}  = useSelector((state)=>state.posts); 
   
  const navigate = useNavigate() ; 
  const dispatch = useDispatch() ; 
  const {id} = useParams();  
  useEffect(()=> { 
    dispatch(getPost(id)) ;
  },[id,dispatch]); 
  if(!post) return null ; 
  if(isLoading) { 
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
             <CircularProgress size="5em"  />
      </Paper>
    )
  }
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
             <Typography variant='body1'   ><strong>Comments - coming soon!</strong></Typography> 
             <Divider style={{margin : "20px 0"}} /> 
          </div> 
          <div className={classes.imageSection}>  
           <img className={classes.media} src={post.selectedFile} alt={post.title} />
          </div>
       </div>
  </Paper>
  )
}

export default PostDetails;