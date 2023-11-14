import React from 'react';
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyle from "./styles";
import { Link } from 'react-router-dom';

const Paginate = () => {
    const classes = useStyle();

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={5}
            page={1}
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
