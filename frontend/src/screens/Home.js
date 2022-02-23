import React, { useEffect, useState } from 'react';
import ContactsList from '../components/ContactsList';
import { HomeMain } from '../styles/home';
import axios from 'axios';

const Home = () => {
    const [contactsData, setContactsData] = useState(null);

    useEffect(async () => {
        await axios.get('http://localhost:3001/contatos')
            .then(response => setContactsData(response.data.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <HomeMain>
            <h1>Lista telefônica</h1>
            {
                contactsData ? <ContactsList contactsData={contactsData}/> : null
            }
        </HomeMain>
    );
};

export default Home;