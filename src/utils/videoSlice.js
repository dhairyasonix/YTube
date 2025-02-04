import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState:
    {
        videoList: [],

    }
    ,
    reducers: {
        addVideo: (state, action) => {
            state.videoList = action.payload;
        },
    },
});
export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;