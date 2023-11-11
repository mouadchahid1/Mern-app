import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react' ;
import Visibility from "@material-ui/icons/Visibility" 
import VisibilityOff from "@material-ui/icons/VisibilityOff"

const Input = ({half, name, type, handlerChange, label, autoFocus , handleShowpassword}) => {
  return (
     <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField 
     name= {name}  
     type= {type} 
     onChange={handlerChange}
     variant="outlined" 
     required  
     fullWidth 
     label={label}
     autoFocus={autoFocus} 
     InputProps={name === "password" ? {
        endAdornment : ( 
            <InputAdornment position='end'> 
             <IconButton onClick={handleShowpassword} > 
              {type === "password" ? <Visibility /> : <VisibilityOff />}
             </IconButton>
            </InputAdornment>
        ) ,
     }:null}
     
    /> 
     </Grid>
  )
}

export default Input