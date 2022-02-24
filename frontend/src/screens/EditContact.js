import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditMain, SubmitInput, FormElement, ButtonsContainer, GoBackButton } from "../styles/editcontact";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        await axios.get(`http://localhost:3001/contatos/${id}`)
            .then(response => {
                setName(response.data.data[0].name);
                setPhone(response.data.data[0].phone);
                setEmail(response.data.data[0].email);
                setImage(response.data.data[0].image);
            })
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put('http://localhost:3001/contatos/editar', {
            id,
            name,
            phone,
            email,
            image,
        }).then(() => {
            navigate(`/contatos/${id}`);
        });
    };

    return (
        <EditMain>
            <h1>Editar contato: </h1>
            <section>
                <article>
                    <form onSubmit={e => handleSubmit(e)} method='POST'>
                        <FormElement>
                            <label for='name'>Nome*:</label>
                            <input type='text' name='name' required maxLength={70} value={name} onChange={e => setName(e.target.value)} />
                        </FormElement>
                        <FormElement>
                            <label for='phone'>Telefone*:</label>
                            <input type='text' name='phone' required maxLength={14} required value={phone} onChange={e => setPhone(e.target.value)} />
                        </FormElement>
                        <FormElement>
                            <label for='email'>E-mail*:</label>
                            <input type='text' name='email' required maxLength={50} value={email} onChange={e => setEmail(e.target.value)} />
                        </FormElement>
                        <FormElement>
                            <label for='image'>Imagem:</label>
                            <input type='file' name='image' accept='.jpg, .jpeg, .jfif, .png, .pjepg, .pjp, .svg, .webp' value={image} onChange={e => setImage(e.target.value)} />
                        </FormElement>
                        <ButtonsContainer>
                            <GoBackButton onClick={(e) => navigate(`/contatos/${id}`)}>Voltar</GoBackButton>
                            <SubmitInput type='submit' value="Editar" />
                        </ButtonsContainer>
                    </form>
                </article>
            </section>
        </EditMain>
    );
};

export default EditContact;