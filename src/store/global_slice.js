import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice = createSlice({
    name: "Notifications",
    initialState: {
        toast: {
            message: "",
            status: 0
        },
        loading: false
    },
    reducers: {
        setNotification: (state, { payload }) => {
            state.toast = payload
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    }
});

export const { setNotification, setLoading } = GlobalSlice.actions;