import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { phoneMask } from '../utils/phoneMask';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { ContactMain, ImageContainer, ButtonsContainer, ContactInfoContainer, InfoContainer, InfoLine, ContactAction, IconSpan } from '../styles/contact';

const Contact = () => {
    const [contactData, setContactData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        await axios.get(`http://localhost:3001/contatos/${id}`)
            .then(response => setContactData(response.data.data[0]))
            .catch(error => console.log(error));
    }, []);

    const deleteContact = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:3001/contatos/deletar/${contactData.id}`)
            .then(() => {
                setTimeout(() => navigate('/'), 50);
            });
    };

    return (
        <ContactMain>
            <section>
                {
                    contactData ? (
                        <>
                            <ContactInfoContainer>
                                <ImageContainer>
                                    {
                                        contactData.image ? <img src={contactData.image.data[0]} /> : <IconSpan><BsPersonCircle /></IconSpan>
                                    }
                                </ImageContainer>
                                <InfoContainer>
                                    <InfoLine>
                                        <span>{contactData.name}</span>
                                    </InfoLine>
                                    <InfoLine>
                                        <IconSpan><FiAtSign /></IconSpan>
                                        <span>{contactData.email}</span>
                                    </InfoLine>
                                    <InfoLine>
                                        <IconSpan><BsFillTelephoneFill /></IconSpan>
                                        <span>{phoneMask(contactData.phone)}</span>
                                    </InfoLine>
                                </InfoContainer>
                            </ContactInfoContainer>
                            <ButtonsContainer>
                                <form>
                                    <ContactAction onClick={() => navigate('/')} type='submit' value="Voltar ?? lista" color='green'/>
                                </form>
                                <form action='/'>
                                    <ContactAction onClick={() => navigate(`/contatos/editar/${contactData.id}`)} type='submit' value="Editar" color='#1e1e1e'/>    
                                </form>
                                <form>
                                    <ContactAction onClick={(e) => deleteContact(e)} type='submit' value="Excluir" color='red'/>
                                </form>
                            </ButtonsContainer>
                        </>
                    ) : null
                }
            </section>
        </ContactMain>
    );
};

export default Contact;