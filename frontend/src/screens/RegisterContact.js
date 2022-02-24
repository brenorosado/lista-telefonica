import React, { useState } from 'react';
import { RegisterMain, SubmitInput, FormElement, ButtonsContainer, GoBackButton } from '../styles/registercontact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/contatos/cadastrar', {
            name,
            phone,
            email,
            image,
        }).then(() => {
            setName('');
            setPhone('');
            setEmail('');
            setImage(null);
            setTimeout(() => navigate('/'), 100);
        });
    };

    

    return (
        <RegisterMain>
            <h1>Adicionar novo contato: </h1>
            <section>
                <article>
                    <form onSubmit={e => handleSubmit(e)} method='POST'>
                        <FormElement>
                            <label for='name'>Nome*:</label>
                            <input type='text' name='name' required maxLength={70} value={name} onChange={e => setName(e.target.value)}/>
                        </FormElement>
                        <FormElement>
                            <label for='phone'>Telefone*:</label>
                            <input type='text' name='phone' required maxLength={14} required value={phone} onChange={e => setPhone(e.target.value)}/>
                        </FormElement>
                        <FormElement>
                            <label for='email'>E-mail*:</label>
                            <input type='text' name='email' required maxLength={50} value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormElement>
                        <FormElement>
                            <label for='image'>Imagem:</label>
                            <input type='file' name='image' accept='.jpg, .jpeg, .jfif, .png, .pjepg, .pjp, .svg, .webp' value={image} onChange={e => setImage(e.target.value)}/>
                        </FormElement>
                        <ButtonsContainer>
                            <GoBackButton onClick={(e) => navigate('/')}>Voltar</GoBackButton>
                            <SubmitInput type='submit' value="Adicionar" />
                        </ButtonsContainer>
                    </form>
                </article>
            </section>
        </RegisterMain>
    );
};

export default RegisterContact;
