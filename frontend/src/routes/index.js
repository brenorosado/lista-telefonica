import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import RegisterContact from '../screens/RegisterContact';

const ReactRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar' element={<RegisterContact />} />
                <Route path='/contatos/:id' element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default ReactRoutes;