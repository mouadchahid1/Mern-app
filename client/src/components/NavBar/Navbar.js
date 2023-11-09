import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react'; 
import memories from "../../images/memories.jpeg"; 
import useStyles  from "./styles";
import { Link }  from "react-router-dom";

const Navbar = () => { 
    const classes = useStyles() ; 
    const user = null ;
  return (
    <AppBar className={classes.appBar}  position="static" color="inherit" >
   <div className={classes.brandContainer}>
   <Typography component={Link} to="/"  className={classes.heading} variant="h2" align='center'>Memories</Typography> 
     <img  className={classes.image} src={memories} alt="memories" height="60" />
   </div> 
   <Toolbar className={classes.toolbar} >
 {
    user ? ( 
        <div className={classes.profile}> 
         <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> 
             {user.result.name.charAt(0)}</Avatar> 
        <Typography variant="h6" className={classes.userName} > {user.result.name}</Typography>
        <Button variant='contained' className={classes.logout} color="secondary" >Log out</Button>
        </div>
    ) 
    : ( 
     <Button component={Link} to="/auth" color="primary" variant="contained" >Sign in</Button>
    )
 }
   </Toolbar>
  </AppBar> 
  )
}

export default Navbar ;