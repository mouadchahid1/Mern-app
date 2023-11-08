import React, { useState } from 'react'
import useStyles from "./styles"; 
import { Paper,Button,Typography , TextField } from '@material-ui/core'; 
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
 
const Form = () => { 
  const [postData , setPostData] = useState({
    title : "" , creator : "", message : "", selectedFile: "" , tags :""
  });  
  const dispatch = useDispatch()
    const classes = useStyles() ; 
    const handleSubmit = (e) => { 
     e.preventDefault() ; 
      dispatch(createPost(postData));
    } 
    const clear  =() => { 

    }
  return ( 

    <Paper className={`${classes.root} ${classes.paper}`}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} >
        <Typography  variant='h6'>Creating Memory</Typography>  
          <TextField name='creator' 
           label="Creator" 
           variant="outlined"  
           fullWidth
           value={postData.creator} 
           onChange={(e)=> setPostData({...postData , creator : e.target.value}) }
          /> 
            <TextField name='title' 
           label="Title" 
           variant="outlined"  
           fullWidth
           value={postData.title} 
           onChange={(e)=> setPostData({...postData , title : e.target.value}) }
          />
            <TextField name='message' 
           label="Message" 
           variant="outlined"  
           fullWidth
           value={postData.message} 
           onChange={(e)=> setPostData({...postData , message : e.target.value}) }
          />
            <TextField name='tags' 
           label="Tags" 
           variant="outlined"  
           fullWidth
           value={postData.tags} 
           onChange={(e)=> setPostData({...postData , tags : e.target.value}) }
          /> 
          <div className={classes.fileInput}> 
           <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData , selectedFile: base64}) } />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" style={{"marginBottom":"7px"}} fullWidth color='primary' size='large' type='submit' >Submit</Button>
          <Button variant="contained" fullWidth  color="secondary" size="small" onClick={clear} >Clear</Button>

      </form>
    </Paper>
  )
}

export default Form ;