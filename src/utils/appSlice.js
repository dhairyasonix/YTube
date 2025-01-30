import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenue: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }

    }
});

export const { toggleMenue } = appSlice.actions;

export default appSlice.reducer;