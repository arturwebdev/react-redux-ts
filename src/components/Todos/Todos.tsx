import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectTodos } from "../../store/slices/todos/todosSlice"
import Todo from "../Todo/Todo"
import { getTodos } from '../../store/slices/todos/todosAPI'


const Todos: React.FC = () => {
    const todos = useAppSelector(selectTodos)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <div>
            {
                todos.map(todo => (
                    <Todo key={todo.id}  {...todo} />
                ))
            }
        </div>
    )
}

export default Todos