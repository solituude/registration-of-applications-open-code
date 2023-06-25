import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "react-bootstrap";
import Pagination from '@mui/material/Pagination';
import {setCurrentPage} from "../../store/reducers/logReducer";
import {createTheme, ThemeProvider} from "@mui/material";
import s from './statement.module.sass'

const TablePagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.logPage.currentPage);
    const totalPages = useSelector(store => store.logPage.totalPages);

    const handleChangePage = (event, page) => {
        dispatch(setCurrentPage(page))
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#A0ABD1',
            },
            secondary: {
                main: '#E1E5F3',
            },
        },
    });

    return(
        <Stack spacing={2} className={s.pagination__container}>
            <ThemeProvider theme={theme}>
                <Pagination count={totalPages}
                            page={currentPage}
                            onChange={handleChangePage}
                            showFirstButton showLastButton
                            color="primary"
                            className={s.pagination}
                            shape="rounded" />
            </ThemeProvider>
        </Stack>
    );
}

export default TablePagination;