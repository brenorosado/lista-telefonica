import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../screens/Contact';
import EditContact from '../screens/EditContact';
import Home from '../screens/Home';
import RegisterContact from '../screens/RegisterContact';

const ReactRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/contatos/:id' element={<Contact />} />
                <Route path='/contatos/cadastrar' element={<RegisterContact />} />
                <Route path='/contatos/editar/:id' element={<EditContact />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
};

export default ReactRoutes;