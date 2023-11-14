import React, { useEffect, useState } from 'react'
import useStyles from "./styles"; 
import { Paper,Button,Typography , TextField } from '@material-ui/core'; 
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux';
import { createPost , updatePost} from '../../actions/posts';
 
const Form = ({currentId , setCurrentId}) => { 
  const [postData , setPostData] = useState({
    title : "", message : "", selectedFile: "" , tags :""
  }); 
  const user = JSON.parse(localStorage.getItem("profile"));
const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId) : null);
  const dispatch = useDispatch();
    const classes = useStyles() ;  
    useEffect(()=> {
       if(post) setPostData(post) ; 
  
    },[post]);

    const handleSubmit = (e) => { 
     e.preventDefault() ;  
     if(currentId) {
      dispatch(updatePost(currentId,{...postData , name : user?.result?.name })) ;  
     } 
     else {
       dispatch(createPost({...postData , name : user?.result?.name }));
     } 
     clear() ; 
    } 
    const clear  =() => { 
      setCurrentId(null);
      setPostData({
        title: "",
        message: "",
        selectedFile: "",
        tags: "",
      })
    } 
    if(!user) {
      return ( 
         <Paper className={classes.paper}>
          <Typography variant="h6">Please login for create memories and likes post</Typography>
         </Paper>
      )
    }
  return ( 

    <Paper className={`${classes.root} ${classes.paper}`}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} >
        <Typography  variant='h6'>{ currentId ? "Edit" : "Create"} Memory</Typography>  
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
           onChange={(e)=> setPostData({...postData , tags : e.target.value.split(',')}) }
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