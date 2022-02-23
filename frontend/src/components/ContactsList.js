import React from 'react';
import { phoneMask } from '../utils/phoneMask';
import { ContactsArticle, IconSpan } from '../styles/contactslist';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';

const ContactsList = ({ contactsData }) => {
    console.log(contactsData);

    return (
        <ContactsArticle>


            <ul>
                {
                    contactsData.length > 0 ? (
                            contactsData.map(item => {
                                return (
                                    <li>
                                        <a href={`/contatos/${item.id}`}>
                                            <div>
                                                {
                                                    item.image.data[0] ? item.image.data[0] : <IconSpan><BsPersonCircle /></IconSpan>
                                                }
                                                <span>{item.name}</span>
                                            </div>
                                            <div>
                                                <IconSpan><FiAtSign /></IconSpan>
                                                <span>{item.email}</span>
                                            </div>
                                            <div>
                                                <IconSpan><BsFillTelephoneFill /></IconSpan>
                                                <span>{phoneMask(item.phone)}</span>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })) : (<li><span>Lista telefônica vazia.</span></li>)
                }
            </ul>
        </ContactsArticle>
    );
};

export default ContactsList;