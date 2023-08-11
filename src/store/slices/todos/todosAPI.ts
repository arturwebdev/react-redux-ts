
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "../../../types/todo";
import axios from "axios";

interface IResponseDataItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const getTodos = createAsyncThunk<ITodoItem[], undefined>(
    'todos/getTodos',
    async () => {
        const resp  = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const data: IResponseDataItem[] = resp.data

        return data.map(({ id, completed, title }) => ({
            id: id.toString(),
            completed,
            body: title
        }))
    }
)