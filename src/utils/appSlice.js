import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenue: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) =>{
            state.isMenuOpen = false;
        },
        OpenMenu: (state) =>{
            state.isMenuOpen = true;
        },

    }
});

export const { toggleMenue,closeMenu,OpenMenu } = appSlice.actions;

export default appSlice.reducer;