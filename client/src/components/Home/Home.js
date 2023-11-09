import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux'; 
import useStyles from "./styles"; 
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
 

const Home = () => { 
    const classes = useStyles() ;  
    const [currentId , setCurrentId] = useState(null) ; 
    const dispatch = useDispatch() ;  
    
    useEffect(() => {
      dispatch(getPosts());
    },[dispatch]);
  return (
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
  )
}

export default Home