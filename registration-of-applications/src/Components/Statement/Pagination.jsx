import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "react-bootstrap";
import Pagination from '@mui/material/Pagination';
import {setCurrentPage} from "../../store/reducers/logReducer";

const TablePagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.logPage.currentPage);
    const totalPages = useSelector(store => store.logPage.totalPages);

    const handleChangePage = (event, page) => {
        dispatch(setCurrentPage(page))
    }

    return(
        <Stack spacing={2}>
            <Pagination count={totalPages}
                        page={currentPage}
                        onChange={handleChangePage}
                        showFirstButton showLastButton
                        variant="outlined"
                        shape="rounded" />
        </Stack>
    );
}

export default TablePagination;