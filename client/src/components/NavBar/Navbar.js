import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import memories from "../../images/memories.jpeg"; 
import useStyles  from "./styles";
import { Link, useLocation, useNavigate }  from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionType'; 
import decode from "jwt-decode"



const Navbar = () => {  
  const navigate = useNavigate() ; 
  const dispatch = useDispatch() ;
    const classes = useStyles() ;  
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("profile"))); 
    const location = useLocation() ;
    const logout = () => { 
      dispatch({type : LOGOUT});
          setUser(null); 
            
          navigate("/")
      }
    useEffect(()=>{ 
     const token = user?.token ; 
     if(token) {
      const decodedToken = decode(token) ;
      if(decodedToken.exp * 1000 < new Date().getTime() ) logout() ;
     }
     setUser(JSON.parse(localStorage.getItem("profile")));
    },[location]); 

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
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}> 
             {user.result.name.charAt(0)}</Avatar> 
        <Typography variant="h6" className={classes.userName} > {user.result.name}</Typography>
        <Button variant='contained' className={classes.logout} color="secondary"  onClick={logout} >Log out</Button>
        </div>
    ) 
    :( 
     <Button component={Link} to="/auth" color="primary" variant="contained" >Sign in</Button>
    )
 } 
   </Toolbar>
  </AppBar> 
  )
}

export default Navbar ;