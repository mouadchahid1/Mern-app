import React, { useEffect, useState } from 'react' ;  
import { Card,CardActions , CardContent , CardMedia , Button , Typography,ButtonBase } from '@material-ui/core';
import  ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete"; 
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"; 
import moment from "moment";
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { deletePost ,likePost} from '../../../actions/posts';
import {useNavigate} from "react-router-dom"

const Post = ({post, setCurrentId}) => {
    const classes = useStyles() ; 
     const dispatch = useDispatch() ; 
     const navigate = useNavigate() ;
     const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); 
     const openPost = () => {
        navigate(`/posts/${post._id}`);
     }
     useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("profile")));
    }, []);
  return ( 
    
    <Card className={classes.card}  raised elevation={6} > 
    
    <CardMedia className={classes.media} image={post.selectedFile} title={post.title} /> 
 
    <div className={classes.overlay}> 
     <ButtonBase className={classes.cardActions} onClick={openPost}>  
     <Typography variant='h6' >{post.name}</Typography>
     <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
     </ButtonBase>
    </div> 
    <div className={classes.overlay2}> 
     {(user?.result?.sub === post.creator || user?.result?._id === post.creator) && ( 
      <Button style={{color : "white"}} size='small' onClick={()=> { setCurrentId(post._id)}} > 
      <MoreHorizIcon fontSize="medium" />
      </Button>
     ) }
      
    </div>
    <div className={classes.details}> 
    <Typography variant="body2" color='textSecondary' >{post.tags.map(tag=> `#${tag} `)}</Typography>
    </div>
    <Typography variant='h5' className={classes.title} gutterBottom >{post.title}</Typography>
   
      <CardContent > 
        <Typography variant='body2' color="textSecondary" component="p">{post.message}</Typography>   
      </CardContent>  

 
    
    <CardActions className={classes.cardActions} >
          <Button size="small" color='primary' disabled={!user?.result} onClick={()=>dispatch(likePost(post._id)) }> 
            <ThumbUpAltIcon fontSize="small" /> 
            &nbsp; {post.likes.length}
          </Button>  
          { (user?.result?.sub === post?.creator || user?.result?._id === post?.creator ) && (
              <Button size="small" color='primary' onClick={()=> dispatch(deletePost(post._id))}> 
              <DeleteIcon fontSize="small" /> 
              Delete
            </Button>
          )}
       
    </CardActions>
    
    </Card>
  )
}

export default Post