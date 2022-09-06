import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Home from "../src/pages/home";
import Products from "../src/pages/products";

const RouteNavigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/products" element={<Products />} />
                </Routes>
            </Router>
        </>
    );
};


export default RouteNavigation;