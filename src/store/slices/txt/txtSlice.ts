import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const initialState: string = ''

const txtSlice = createSlice({
    name: 'txt',
    initialState,
    reducers: {
        toggleTxt(state, action: PayloadAction<string>) {
            return action.payload
        },
        resetTxt(){
            return ''
        }
    }
})


export const selectTxt = (state: RootState): string => state.txt

export const {resetTxt, toggleTxt} = txtSlice.actions

export const txtReducer = txtSlice.reducer