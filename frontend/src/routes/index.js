import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import RegisterContact from '../screens/RegisterContact';

const ReactRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar' element={<RegisterContact />} />
            </Routes>
        </Router>
    );
};

export default ReactRoutes;