import styled from "styled-components";

export const EditMain = styled.main`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        article{
            form {
                display: flex;
                flex-direction: column;
                width: 600px;
            }
        }
    }
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    input {
        padding: 8px;
    }
`;

export const SubmitInput = styled.input`
    width: 90px;
    padding: 10px 0;
    border: none;
    background-color: green;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
    font-size: 15px;

    :hover {
        opacity: 0.7;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
`;

export const GoBackButton = styled.a`
    display: flex;
    justify-content: center;
    width: 90px;
    padding: 10px 0;
    border: none;
    background-color: #1e1e1e;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
    font-size: 15px;
    margin-right: 10px;

    :hover {
        opacity: 0.7;
    }
`;