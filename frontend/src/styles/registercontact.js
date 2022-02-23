import styled from 'styled-components';

export const RegisterMain = styled.main`
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

                div {
                    display: flex;
                    flex-direction: column;
                    padding: 10px 0;

                    input {
                        padding: 8px;
                    }
                }
            }
        }
    }
`;

export const SubmitInput = styled.input`
    width: 90px;
    height: 30px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s font-size;
    font-size: 15px;

    :hover {
        font-size: 17px;
    }
`;
