import { createAsyncThunk, createSlice, rejectedWithValue } from "@reduxjs/toolkit"
import api_service from "../_helpers/api_service";
import { setLoading, setNotification } from "./global_slice";

const initialState = {
    login_info: {},
    auth_token: '',
    message: ''
}

export const loginUserAction = createAsyncThunk(
    "login",
    async (payload, {rejectWithValue, dispatch}) => {
        dispatch(setLoading(true));
        try {
            const data = await api_service('/users/login', "POST", payload?.formFields);
            dispatch(setLoading(false));
            payload.navigate('/users');
            return data;
        } catch(error) {
            dispatch(setNotification({
                status: 0,
                message: error?.response?.data.message
            }));
            dispatch(setLoading(false));
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const loginSlice = createSlice({
    name: "login_page",
    initialState,
    reducers: {
        // setLoginUserToken: (state, { payload }) => {
        //     state.auth_token = payload;
        // }
    },
    // If we want to call API's using thunk middleware, we need to use extraReducers
    extraReducers: (builder) => {
        builder.addCase(loginUserAction.fulfilled, (state, { payload }) => void(
            state.login_info = payload?.user_info,
            state.auth_token = payload?.auth_token
        ))
        builder.addCase(loginUserAction.rejected, (state, { payload }) => void(
            state.login_info = {},
            state.auth_token = '',
            state.error_message =payload?.message
        ))
    }
});

export const { setLoginUserToken } = loginSlice.actions;
