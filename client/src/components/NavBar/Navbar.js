import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'; 
import memories from "../../images/memories.jpeg"; 
import useStyles  from "./styles";
import { Link, useLocation, useNavigate }  from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionType';



const Navbar = () => {  
  const navigate = useNavigate() ; 
  const dispatch = useDispatch() ;
    const classes = useStyles() ;  
    const [user , setUser] = useState(JSON.parse(localStorage.getItem("profile"))); 
    const location = useLocation() ;
    useEffect(()=>{ 
  
     setUser(JSON.parse(localStorage.getItem("profile")));
    },[location]); 
const googleLogout = () => { 
  dispatch({type : LOGOUT});
      setUser(null); 
        
      navigate("/")
  }
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
                  <Avatar className={classes.purple} alt={user.result.name} image={user.result.picture}> 
             {user.result.name.charAt(0)}</Avatar> 
        <Typography variant="h6" className={classes.userName} > {user.result.name}</Typography>
        <Button variant='contained' className={classes.logout} color="secondary"  onClick={googleLogout} >Log out</Button>
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