import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { phoneMask } from '../utils/phoneMask';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { ContactMain, ImageContainer, InfoContainer, InfoLine, ContactAction } from '../styles/contact';

const Contact = () => {
    const { id } = useParams();
    const [contactData, setContactData] = useState(null);

    useEffect(async () => {
        await axios.get(`http://localhost:3001/contatos/${id}`)
            .then(response => setContactData(response.data.data[0]))
            .catch(error => console.log(error));
    }, []);

    return (
        <ContactMain>
            <section>
                {
                    contactData ? (
                        <>
                            <article>
                                <ImageContainer>
                                    {
                                        contactData.image.data[0] ? <img src={contactData.image.data[0]} /> : <span><BsPersonCircle /></span>
                                    }
                                </ImageContainer>
                                <InfoContainer>
                                    <InfoLine>
                                        <span>{contactData.name}</span>
                                    </InfoLine>
                                    <InfoLine>
                                        <span><FiAtSign /></span>
                                        <span>{contactData.email}</span>
                                    </InfoLine>
                                    <InfoLine>
                                        <span><BsFillTelephoneFill /></span>
                                        <span>{phoneMask(contactData.phone)}</span>
                                    </InfoLine>
                                </InfoContainer>
                            </article>
                            <article>
                                <ContactAction color='dodgerblue'>Editar</ContactAction>
                                <ContactAction color='red'>Excluir</ContactAction>
                            </article>
                        </>
                    ) : null
                }
            </section>
        </ContactMain>
    );
};

export default Contact;