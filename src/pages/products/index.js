import { useState } from "react";
import Form from "../../components/form";
import TodoItem from "../../components/todoItem";


function Products() {

    const [todos, setTodos] = useState([])

    const handleSubmitProduct = (todo) => {
        console.log(todo)
        // e.preventDefault()

        setTodos([...todos, todo])
    }

    // console.log(todos)

    // const dados = todos.map(item => console.log(`aqui: ${item.text}`))

    return (
        < >
            <Form handleSubmitProduct={handleSubmitProduct} />
            <div style={{ background: 'gray' }}>
        
            {
                    todos && (
                        todos.map((todo) => {
                            return (
                                <>
                                   <TodoItem todo={todo}/>
                                </>
                            )
                        })
                    )
                }


            </div>

        </>
    );
}

export default Products;
