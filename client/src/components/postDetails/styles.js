import {makeStyles} from "@material-ui/core/styles" ; 
export default makeStyles((theme)=> ({

    media : { 
        
        borderRadius : "20px",  
    
        objectFit : "cover",  
        textAlign : "center" ,
        width : "100%", 
        maxHeight : "600px",
    }, 
    card : { 
        display : "flex",   
        justifyContent : "space-between",
        width : "100%",  
        [theme.breakpoints.down("sm")] : { 
            flexWrap : "wrap", 
             flexDirection : "column" 
        }, 

    }, 
    loadingPaper : { 
        display : "flex", 
        justifyContent : "center", 
        padding : "50px",
        width : "100%", 
    },
    section : {
        borderRadius : "20px", 
        width : "70%",
        [theme.breakpoints.down("sm")] : { 
            marginLeft : 0, 
        },
    },  
    imageSection : {
        marginLeft : "50px" , 
        
        [theme.breakpoints.down("sm")] : { 
            flexDirection  : "column", 
        }
    },
    recommendedPost  : {
        display : "flex ", 
        [theme.breakpoints.down("sm")] : {  
            flexDirection : "column" ,
        } ,

    }, 
    commentOuterContainer :{
        display : "flex", 
        justifyContent : "space-between",
    },
    commentInnerCotainer : { 
        height : "200px" ,
        overflowY : "auto" , 
        marginTop : "30px"
    },
}))