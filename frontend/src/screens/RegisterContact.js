import React, { useState } from 'react';
import { RegisterMain, SubmitInput } from '../styles/registercontact';
import axios from 'axios';

const RegisterContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

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
        });
    };

    return (
        <RegisterMain>
            <h1>Adicionar novo contato: </h1>
            <section>
                <article>
                    <form method='POST'>
                        <div>
                            <label for='name'>Nome:</label>
                            <input type='text' name='name' required value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label for='phone'>Telefone:</label>
                            <input type='text' name='phone' maxLength={11} required value={phone} onChange={e => setPhone(e.target.value)}/>
                        </div>
                        <div>
                            <label for='email'>E-mail:</label>
                            <input type='text' name='email' required value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label for='image'>Imagem:</label>
                            <input type='file' name='image' accept='.jpg, .jpeg, .jfif, .png, .pjepg, .pjp, .svg, .webp' value={image} onChange={e => setImage(e.target.value)}/>
                        </div>
                        <SubmitInput onClick={e => handleSubmit(e)} type='submit' value="Cadastrar" />
                    </form>
                </article>
            </section>
        </RegisterMain>
    );
};

export default RegisterContact;
