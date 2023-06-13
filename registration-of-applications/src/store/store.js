import { configureStore } from '@reduxjs/toolkit'
import logReducer from "./reducers/logReducer";



const store = configureStore({
    reducer: {
        logPage: logReducer,
    }
});

export default store;