import { combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from './login_slice';
import { GlobalSlice } from './global_slice';

const rootReducer = combineReducers({
    login: loginSlice.reducer,
    globalState: GlobalSlice.reducer
});

export default rootReducer;