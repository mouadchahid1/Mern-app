import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((themes) => ({
  appBarSearch : {
    borderRadius : 4 , 
    marginBottom : "1rem" ,  
    display   : "flex", 
    padding : "16px"
  }, 
  pagination : { 
    borderRadius : 4 , 
    marginTop : "1rem" , 
    padding : "16rem" , 
  } ,
  gridContainer : {
    [themes.breakpoints.down("xs")] : { 
      flexDirection : "column-reverse"
    }
  }
}));