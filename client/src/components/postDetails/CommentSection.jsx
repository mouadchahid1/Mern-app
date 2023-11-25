import React , {useEffect,useRef, useState} from 'react' ;
import  {useDispatch}  from "react-redux" ;
import {Typography , TextField , Button} from "@material-ui/core" ; 
import useStyles from "./styles" ;
import { commentPost } from '../../actions/posts';
 

const CommentSection = ({post}) => {  

    const dispatch = useDispatch()  ; 
    const classes = useStyles() ; 
    const user = JSON.parse(localStorage.getItem("profile"));
    const [comments,setComments] = useState(post?.comments) ; 
   const [comment , setComment]  = useState("") ; 
   const commentsRef = useRef() ;
   const handleClick = async () => { 
     if(comment) { 
      const finalcomment = `${user.result.name}  : ${comment}`; 
     
      const newComment = await dispatch(commentPost(finalcomment,post._id));  
      setComments(newComment) ;
      setComment("");  
      commentsRef.current.scrollIntoView({behavior : "smooth"}) ;
     }
   } 
 
   useEffect(()=> {

   },[post])
  return (
    <div> 
        <div className={classes.commentOuterContainer}> 
         <div className={classes.commentInnerCotainer}> 
         <Typography gutterBottom  variant='h6'>Comments</Typography> 
        { 
         comments.map((comment,i) =>( 
            <Typography gutterBottom variant="subtitle1" key={i}><strong>{comment.split(":")[0]}</strong> : {comment.split(":")[1]}</Typography>
         ))
        } 
        <div ref={commentsRef}></div>
         </div>  
         {user?.result?.name && (
          <div style={{width : "70%"}}> 
          <Typography gutterBottom  variant='h6'>write a Comment</Typography>  
          <TextField fullWidth rows={4} variant='outlined' label="Comment"  multiline value={comment} onChange={(e)=> setComment(e.target.value)}  />
         <Button style={{marginTop : "10px"}}fullWidth disabled={!comment} color='primary' variant='contained' onClick={handleClick}> 
          Submit
         </Button>
          </div>
         )}
         
        </div>
    </div>
  )
}

export default CommentSection