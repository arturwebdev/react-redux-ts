import { useAppDispatch } from "../../hooks"
import { checkItem, delItem } from "../../store/slices/todos/todosSlice"
import { ITodoItem } from "../../types/todo"

interface ITodoProps extends ITodoItem {}

const Todo: React.FC<ITodoProps> = ({body, completed, id}) => {
    const dispatch = useAppDispatch()
    return (
        <h1>
            <span
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                {body}
            </span>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => dispatch(checkItem(id))} />
            <span
                style={{
                    color: 'red',
                    cursor: 'pointer',
                }}
                onClick={() => dispatch(delItem(id))}
            > X </span>
        </h1>
    )
}

export default Todo