import React, { useEffect, useState } from 'react' 
import {Container , AppBar , Typography , Grow , Grid} from "@material-ui/core";  
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'; 
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'; 
import useStyles from "./styles"; 
import memories from "./images/memories.jpeg";
const App = () => { 
  const classes = useStyles() ;  
  const [currentId , setCurrentId] = useState(null) ; 
  const dispatch = useDispatch() ;  
  
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);
  return (
    <Container maxWidth="lg" >
      <AppBar className={classes.appBar}  position="static" color="inherit" >
        <Typography  className={classes.heading} variant="h2" align='center'>Memories</Typography> 
         <img  className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar> 
      <Grow in> 
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={7} >  
           {/* // on a passe le setCurrentId pour le passe au enfant Post et pour le puisse modifier set state */}
            <Posts setCurrentId={setCurrentId} />
           </Grid>
           <Grid item xs={12} sm={4} > 
            {/* passe le current id pour modifier de h1 de formlaire et passe set current id pour le change  */}
            <Form currentId ={currentId} setCurrentId={setCurrentId}  />
           </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App