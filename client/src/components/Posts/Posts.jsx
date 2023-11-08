import React from 'react'
import Post from './Post/Post'
import useStyles from "./styles"; 
import { useSelector } from 'react-redux'; 
import {Grid , CircularProgress} from "@material-ui/core"

const Posts = ({setCurrentId}) => {
    const classes = useStyles() ; 
    const posts = useSelector(data=>data.posts); 
     
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer}  container alignItems="stretch" spacing={3} >
                { 
                  posts.map((post)=>( 
                   <Grid item xs={12} key={post._id} sm={6}> 
                   <Post post={post} setCurrentId={setCurrentId} />
                   </Grid>
                  ))
                }
      </Grid>
    )

    
  )
}

export default Posts