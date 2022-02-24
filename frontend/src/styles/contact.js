import styled from "styled-components";

export const ContactMain = styled.main`
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 10px;

        article {
            width: 600px;
            display: flex;
            justify-content: space-evenly;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 140px;
        height: 140px;
    }

    span {
        font-size: 110px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoLine = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    margin: 7px 0;
    
    span {
        margin: 0 5px;
    }
`;

export const ContactAction = styled.input`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
    font-size: 15px;
    border: none;

    :hover {
        opacity: 0.7;
    }
`;

export const IconSpan = styled.span`
    color: dodgerblue;
`;