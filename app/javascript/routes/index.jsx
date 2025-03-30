import React from "react";
import { BrowserRouter as Router, Routes as RoutesList, Route } from "react-router-dom";
import Home from "../components/Home";

const Routes = () => (
    <Router>
        <RoutesList>
            <Route path="/" element={<Home />} />
        </RoutesList>
    </Router>
);

export default Routes
