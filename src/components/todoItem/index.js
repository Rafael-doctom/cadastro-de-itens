import './style.css';


const TodoItem = ({ todo}) => {
    return (
        <>
            <ul>
                <li>
                    {todo.text}
                </li>
              
            </ul>

        </>
    )
}

export default TodoItem