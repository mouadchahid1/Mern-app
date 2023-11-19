import {makeStyles} from "@material-ui/core/styles" ; 
export default makeStyles((theme)=> ({

    media : {
        borderRadius : "20px", 
        objectFit : "cover", 
        width : "100%", 
        maxHeight : "600px",
    }, 
    card : { 
        display : "flex", 
        width : "100%",  
        [theme.breakpoints.down("sm")] : { 
            flexWrap : "wrap", 
             flexDirection : "column" 
        }, 

    }, 
    loadingPaper : { 
        display : "flex", 
        justifyContent : "center",
        width : "100%", 
    },
    section : {
        borderRadius : "20px", 
        [theme.breakpoints.down("sm")] : { 
            marginLeft : 0, 
        },
    }, 
    recommendedPost  : {
        display : "flex ", 
        [theme.breakpoints.down("sm")] : {  
            flexDirection : "column" ,
        } ,

    },
}))