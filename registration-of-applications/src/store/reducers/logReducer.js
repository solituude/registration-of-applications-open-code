import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/MOCK_DATA-3.json';

const initialState = {
    countRows: 0,
    pageSize: 15,
    currentPage: 1,
    totalPages: 0,
    tableData: [],
    currentData: [],
    isFetching: true,
}

const logReducer = createSlice({
    name: 'logPage',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            return{
                ...state,
                currentPage: action.payload,
            }
        },
        setCurrentData(state, action){
            return{
                ...state,
                currentData: action.payload,
            }
        },
        setTableData(state, action){
            return{
                ...state,
                isFetching: false,
                tableData: action.payload,
            }
        },
        setIsFetching(state, action) {
            return{
                ...state,
                isFetching: action.payload,
            }
        },
        setCountRows(state, action){
            return{
                ...state,
                countRows: action.payload,
            }
        },
        setTotalPages(state, action){
            return{
                ...state,
                totalPages: action.payload,
            }
        }
    }
});

export const { setCurrentPage, setIsFetching,
    setTableData, setCountRows, setTotalPages, setCurrentData } = logReducer.actions;

export const fetchTableDataAsync = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
        dispatch(setTableData(data));
        dispatch(setCountRows(data.length));
        dispatch(setTotalPages(data.length / initialState.pageSize));
    } catch (error) {
        console.log(error.message);
    } finally {
        dispatch(setIsFetching(false));
    }
}


export const fetchSliceData = (currPage) => async (dispatch) => {
    dispatch(setIsFetching(true));
    try{
        dispatch(setCountRows(data.length));
        dispatch(setTotalPages(Math.round(data.length / initialState.pageSize)));
        dispatch(setCurrentData(data.slice((currPage - 1) * initialState.pageSize, currPage * initialState.pageSize)));
    } catch (e) {
        console.log(e.message);
    } finally {
        dispatch(setIsFetching(false));
    }
}


export default logReducer.reducer;