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


    return (
        < >
            <Form handleSubmitProduct={handleSubmitProduct} />
            <div style={{ width: '95vw',  margin: '1rem auto', height: '6vh'}}>

                {
                    todos && (
                        todos.map((todo) => {
                            return (
                                <>
                                    <TodoItem todo={todo} />
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
