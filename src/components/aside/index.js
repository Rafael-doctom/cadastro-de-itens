
import {
    Link
  } from "react-router-dom";

import './style.css';

const Aside = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <ul>
                        <li>
                            Formulário
                        </li>
                        <li>
                            <Link to="/products">
                                Produtos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Aside