
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../../types/todo";
import { RootState } from "../../store";
import { getTodos } from "./todosAPI";

type TodosStateType = ITodoItem[]

const initialState: TodosStateType = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>) {
            state.unshift({
                id: new Date().getTime().toString(),
                body: action.payload,
                completed: false
            })
        },
        checkItem(state, action: PayloadAction<string>) {
            const idx: number = state.findIndex(todo => todo.id === action.payload)
            
            state[idx].completed = !state[idx].completed
        },
        delItem(state, action: PayloadAction<string>) {
            const idx: number = state.findIndex(todo => todo.id === action.payload)

            state.splice(idx, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(getTodos.fulfilled, (state, {payload}) => {
            
            return payload
        })
    },
})


export const selectTodos = (state: RootState): TodosStateType => state.todos

export const {addItem, checkItem, delItem} = todosSlice.actions

export const todosReducer = todosSlice.reducer