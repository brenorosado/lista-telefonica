import React, { useState } from 'react';
import { RegisterMain, SubmitInput } from '../styles/registercontact';

const RegisterContact = () => {

    return (
        <RegisterMain>
            <h1>Adicionar novo contato: </h1>
            <section>
                <article>
                    <form action='localhost:3001/contatos/cadastrar' method='POST'>
                        <div>
                            <label for='name'>Nome:</label>
                            <input type='text' name='name' placeholder='Edson Arantes do Nascimento' required/>
                        </div>
                        <div>
                            <label for='phone'>Telefone:</label>
                            <input type='text' name='phone' placeholder='(99) 999999999' maxLength={11} required/>
                        </div>
                        <div>
                            <label for='email'>E-mail:</label>
                            <input type='text' name='email' placeholder='exemplo@betabit.com' required/>
                        </div>
                        <div>
                            <label for='image'>Imagem:</label>
                            <input type='file' name='image' accept='.jpg, .jpeg, .jfif, .png, .pjepg, .pjp, .svg, .webp' />
                        </div>
                        <SubmitInput type='submit' value="Cadastrar" />
                    </form>
                </article>
            </section>
        </RegisterMain>
    );
};

export default RegisterContact;
