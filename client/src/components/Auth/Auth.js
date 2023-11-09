import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react' ;  
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input';
const Auth = () => { 
    const classes  = useStyles() ;  
    const [showPassword,setShowPassword] = useState(false);
     
    const [isSignup , setisSignup] = useState(false);
    const handlerSubmit = () => 
    { 

    } 
    const handleChange=() => {

    }  
    const handleShowpassword =() => { 
        setShowPassword((prevShowPassword)=> !prevShowPassword);
    } 
    const switchedMode = () => { 
        setisSignup((prevValue)=> !prevValue); 
        setShowPassword(false);
    }
  return (
    <Container  maxWidth="xs" component="main">
      <Paper  className={classes.paper} elevation={3}> 
       <Avatar > 
           <LockOutlinedIcon />
       </Avatar> 
       <Typography variant='h5'>{isSignup ? "Sign Up " : "Sign In"}</Typography> 
       <form className={classes.form} onSubmit={handlerSubmit}> 
         <Grid container spacing={2}> 
          { 
            isSignup && ( 
                <> 
                 <Input name="firstname" label="First name" type="text" onChange={handleChange} autoFocus half /> 
                 <Input name="lastname" label="Last name" type="text" onChange={handleChange}   half />
                </>
            )     
          } 
           <Input name="email" label="Email Address" type="email" onChange={handleChange}   />  
           <Input name="password" label="Password" type={showPassword ? "text" : "password"} 
            onChange={handleChange}  handleShowpassword={handleShowpassword}    /> 
            { 
                  isSignup && (
                    <Input name="cpassword" label="Comfirm Password" type="password"
                    onChange={handleChange}  handleShowpassword={handleShowpassword}    /> 
                  )
            }
          </Grid> 
          <Button type='button' fullWidth color='primary' variant="contained" className={classes.submit}> 
         { isSignup ? "Sign Up" : " Sign in" }
          </Button> 
          <Grid container justifyContent='flex-end' >
            <Grid item> 
             <Button onClick={switchedMode} >
                {isSignup ? "Alredy have an account? sign in" : "don't have an account ? sign up" }
             </Button>
            </Grid>
          </Grid>
       </form>
      </Paper>
    </Container>
  )
}

export default Auth;