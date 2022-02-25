import styled from 'styled-components';
import media from './media';

export const HomeMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    section {
        width: 100%;

        ${media.tablet`
            width: 800px;
        `}
    }

    h1 {
        margin-bottom: 10px;
    }
`;

export const ButtonsArticle = styled.article`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
        background-color: green;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s opacity;
        font-size: 15px;
        margin: 10px 0;
        padding: 10px;
        
        :hover {
            opacity: 0.7;
        }
    }

`;