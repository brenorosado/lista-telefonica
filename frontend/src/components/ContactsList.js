import React from 'react';
import { phoneMask } from '../utils/phoneMask';
import { ContactsArticle, IconSpan, DefaultInfo } from '../styles/contactslist';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { generateImageSrc } from '../utils/imageGenerator';

const ContactsList = ({ contactsData }) => {
    console.log(contactsData);

    return (
        <ContactsArticle>
            <ul>
                {
                    contactsData.length > 0 ? (
                            contactsData.map(item => {
                                return (
                                    <li key={item.id}>
                                        <a href={`/contatos/${item.id}`}>
                                            <div>
                                                {
                                                    item.image ? <img src={`${generateImageSrc(item.image.data)}`}/> : <IconSpan><BsPersonCircle /></IconSpan>
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
                            })) : (<li><DefaultInfo><span>Lista telefônica vazia.</span></DefaultInfo></li>)
                }
            </ul>
        </ContactsArticle>
    );
};

export default ContactsList;