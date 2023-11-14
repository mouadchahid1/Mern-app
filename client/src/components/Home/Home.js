import { Container, Grid, Grow, Paper ,Button,AppBar,TextField} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getPostBySearch, getPosts } from '../../actions/posts';
import { useDispatch  } from 'react-redux'; 
import useStyles from "./styles"; 
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import ChipInput from "material-ui-chip-input";
import {useNavigate,useLocation} from "react-router-dom";
function useQuery () {
  return new URLSearchParams(useLocation().search);
 }
const Home = () => { 
    const classes = useStyles() ;
      
    const [currentId , setCurrentId] = useState(null) ; 
    const dispatch = useDispatch() ;   
    const navigate = useNavigate() ; 
    const query = useQuery() ;
    const page = query.get("page") || 1 ; 
    const searchQuery = query.get("searchQuery"); 
    const [search , setSearch] = useState("") ;
    const [tags , setTags] = useState([]) ;
    const searchPost = () => {
      if(search.trim() || tags.length > 0) {

        console.log(tags) ;
        dispatch(getPostBySearch({search ,tags :tags.join(",")}));
      } 
      else { 
        navigate("/");
      }
    }
    const handleKeyDown = (e) => { 
      if(e.keyCode === 13) {
        // cherchere 
        searchPost();
      } 
    } 
    const handleAdd = (tag) => {
        setTags([...tags , tag]); 
        
    } 
    const handleDelete = (tagToDelete) => {
          setTags(tags.filter((tag)=>tag !== tagToDelete)); 
         
    } 
    

   
 
  return (
    <Grow in> 
    <Container maxWidth="xl">
      <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
       <Grid item xs={12} sm={6} md={9} >  
       {/* // on a passe le setCurrentId pour le passe au enfant Post et pour le puisse modifier set state */}
        <Posts setCurrentId={setCurrentId} />
       </Grid>
       <Grid item xs={12} sm={6} md={3}> 
       <AppBar className={classes.appBarSearch} position='static' color='inherit' > 
         <TextField  name="search"  
         label="Search Memories" variant='outlined' fullWidth value={search} onKeyDown={handleKeyDown}
          onChange={(e)=>setSearch(e.target.value)}  />
          <ChipInput style={{margin : "10px 0"}}  
          value={tags}
           onAdd={handleAdd} 
           onDelete={handleDelete} 
           label= "Search Tags" 
           variant='outlined'
           
          /> 
          <Button onClick={searchPost}  color='primary' variant="contained" className={classes.searchButton} >Search</Button>
       </AppBar>
        {/* passe le current id pour modifier de h1 de formlaire et passe set current id pour le change  */}
        <Form currentId ={currentId} setCurrentId={setCurrentId}  />     
          {
            (!searchQuery || !tags.length) && ( 
              <Paper elevation={6}>
              <Pagination className={classes.pagination} page={page} />
              </Paper>
            )
          }     
       </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home