import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import logReducer from "./reducers/logReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        logPage: logReducer,
    }
},  composeWithDevTools(applyMiddleware(thunk)));



export default store;