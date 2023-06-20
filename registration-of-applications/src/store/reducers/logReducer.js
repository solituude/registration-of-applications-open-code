import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/MOCK_DATA-3.json';

const initialState = {
    pageSize: 15,
    currentPage: 1,
    tableData: [],
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
        }
    }
});

export const { setCurrentPage, setIsFetching,
    setTableData } = logReducer.actions;

export const fetchTableDataAsync = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    try {
        dispatch(setTableData(data));
    } catch (error) {
        console.log(error.message);
    } finally {
        dispatch(setIsFetching(false));
    }
}

export default logReducer.reducer;