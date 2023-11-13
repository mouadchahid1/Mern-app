import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react' ;  
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input'; 
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';  
import { useDispatch  } from 'react-redux';
import { AUTH } from '../../constants/actionType'; 
import jwt_decode from "jwt-decode" ; 
import { useNavigate } from 'react-router-dom'; 
import { signin, signup } from '../../actions/auth';


 
const initialState = {firstname:"",lastname:"",email:"",password:"",cpassword:""};
 
const Auth = () => {  
   const navigate = useNavigate() ;
    const classes  = useStyles() ;  
    const [showPassword,setShowPassword] = useState(false);
    const dispatch = useDispatch() ;
    const [isSignup , setisSignup] = useState(false);
    const [formData , setFormData] =  useState(initialState) ;
    const handlerSubmit = (e) => 
    { 
      e.preventDefault() ;
       if(isSignup) {
        dispatch(signup(formData,navigate)) ; 
         
       }  
       else {
        dispatch(signin(formData,navigate)) 
         
       }
      
    } 
    /// la fonction onChange pour change le value de champs avec name 
    const handleChange=(e) => {
        setFormData({...formData,[e.target.name]: e.target.value}) ;
    }  
    const handleShowpassword =() => { 
        setShowPassword((prevShowPassword)=> !prevShowPassword);
    } 
    const switchedMode = () => { 
        setisSignup((prevValue)=> !prevValue); 
        setShowPassword(false);
    } 
    const googleOnSuccess = async (response) => { 
      
      const result = jwt_decode(response?.credential); 
      const token = response.credential ;
      try {
        dispatch({type :AUTH, data:{result,token}}) ;
        navigate("/");
      } catch (error) {
        console.log(error)
      } 

    }
    const googleOnError = () => {
      console.log("connexion faild");
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
                 <Input name="firstname" label="First name" type="text" handlerChange={handleChange} autoFocus half /> 
                 <Input name="lastname" label="Last name" type="text" handlerChange={handleChange}   half />
                </>
            )     
          } 
           <Input name="email" label="Email Address" type="email" handlerChange={handleChange}   />  
           <Input name="password" label="Password" type={showPassword ? "text" : "password"} 
            handlerChange={handleChange}  handleShowpassword={handleShowpassword}    /> 
            { 
                  isSignup && (
                    <Input name="cpassword" label="Comfirm Password" type="password"
                    handlerChange={handleChange}  handleShowpassword={handleShowpassword}    /> 
                  )
            }
          </Grid> 
          <Button type='submit' fullWidth color='primary' variant="contained" className={classes.submit}> 
         { isSignup ? "Sign Up" : " Sign in" }
          </Button> 
          <GoogleOAuthProvider clientId='601777867599-tmap4j09gtbsls55p6cc6r359ohb7408.apps.googleusercontent.com' >
   
  <GoogleLogin  width="362px"
  onSuccess={googleOnSuccess}
  onError={googleOnError}
/>
 
          </GoogleOAuthProvider> 
           
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