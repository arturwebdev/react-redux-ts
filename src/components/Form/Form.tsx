import { useAppDispatch, useAppSelector } from "../../hooks"
import { addItem } from "../../store/slices/todos/todosSlice"
import { resetTxt, selectTxt, toggleTxt } from "../../store/slices/txt/txtSlice"


const Form: React.FC = () => {
    const txt = useAppSelector(selectTxt)
    const dispatch = useAppDispatch()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        dispatch(addItem(txt))
        dispatch(resetTxt())
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(toggleTxt(e.target.value))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={txt} onChange={handleChange} type="text" />
            <button>Add</button>
        </form>
    )
}

export default Form