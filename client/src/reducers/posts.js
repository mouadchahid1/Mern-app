import { FETCH_ALL , CREATE , DELETE ,LIKE , UPDATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../constants/actionType";
 const posts = (state = {isLoading :true ,posts : [] ,NumberOfPages : 1}, action) => {
    switch (action.type) {  
      case CREATE:
       return [...posts , action.payload] ;
       case START_LOADING:
        return {...state , isLoading : true}  ;
        case END_LOADING:
          return {...state , isLoading : false} ;
       case FETCH_ALL:
        return {...state, 
          posts: action.payload.data  ,
          currentPage : action.payload.currentPage , 
          NumberOfPages : action.payload.NumberOfPages ,
        } ;
        case FETCH_BY_SEARCH : 
        return {...state , posts:action.payload} ;
       case UPDATE:  
       return {...state,posts:state.posts.map(post=> post._id ===  action.payload._id ? action.payload : post)}; 
       case LIKE :
        return {...state,posts:state.posts.map(post=> post._id ===  action.payload._id ? action.payload : post)}; 
       case   DELETE :  
       return  {...state,posts:state.posts.filter(post=> post._id !== action.payload)};
      default:
       
        return state;
    }
  };
  
  export default posts;