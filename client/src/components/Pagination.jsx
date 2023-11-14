import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyle from "./styles";
import { Link } from 'react-router-dom'; 
import { useDispatch ,useSelector } from 'react-redux'; 
import { getPosts } from '../actions/posts';

const Paginate = ({page}) => {
    const classes = useStyle(); 
    const dispatch = useDispatch() 
    const {NumberOfPages} = useSelector(state=>state.posts);
     
    useEffect(() => {
        if(page) dispatch(getPosts(page));
      },[page,dispatch]);
  
    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={NumberOfPages }
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    component={Link}
                    to={`/posts?page=${item.page}`} // Utilisez item.page pour obtenir le numéro de page
                />
            )}
        />
    );
}

export default Paginate;
