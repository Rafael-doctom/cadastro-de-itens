import './style.css';


const TodoItem = ({ todo }) => {
    return (
        <>
            <ul>
                <li>
                    <label>
                        {todo.text}
                    </label>
                    <label>
                        <img src="../images/delete-svgrepo-com.svg" alt='delet' width={25} height={30} />
                        <img src="../images/edit-svgrepo-com.svg" alt='delet' width={25} height={30} />

                    </label>
                </li>
            </ul>

        </>
    )
}

export default TodoItem