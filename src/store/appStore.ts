import { createSlice } from '@reduxjs/toolkit';

type nullOrNum = null | number

type stateType = {
    selected: boolean
}



const initialState: stateType = {
    selected: false
};


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSelected(state) {
            state.selected = !state.selected
        },
        setSelectedToFalse(state) {
            state.selected = false
        },
        setSelectedToTrue(state) {
            state.selected = true
        }
    },
});

export const appActions = appSlice.actions;



export default appSlice.reducer;


