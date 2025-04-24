import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iUISlice {
    isHeaderVisible: boolean;
    header: string;
    isLoading: boolean;
}

const initState: iUISlice = {
    isHeaderVisible: false,
    header: "Wordle",
    isLoading: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initState,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.isHeaderVisible = true;
            state.header = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        clearUiSlice: (state) => {
            state.isHeaderVisible = false;
            state.header = "Wordle";
        }
    }

});

// export actions
export const { setHeader, setIsLoading, clearUiSlice } = uiSlice.actions;
// export reducers
export default uiSlice.reducer;