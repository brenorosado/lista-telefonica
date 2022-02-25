import styled from "styled-components";
import media from "./media";

export const ContactsArticle = styled.article`
    width: 100%;

    ${media.tablet`
        width: 800px;
    `}

    ul {
        list-style-type: none;
        border-top: 1px solid gray;
        
        li {
            border-bottom: 1px solid gray;
            border-left: 1px solid gray;
            border-right: 1px solid gray;

            a {
                padding: 10px;
                text-decoration: none;
                color: black;
                display: flex;
                align-items: center;
                flex-direction: column;

                    ${media.tablet`
                        flex-direction: row;
                        justify-content: space-between;
                    `}
                
                div {
                    height: 30px;
                    display: flex;
                    align-items: center;
                    
                    span {
                        margin: 0 5px;
                    }
                }
                
                :hover {
                    background-color: #e1e1e1;
                }
            }
        }
    }
`;

export const DefaultInfo = styled.div`
    padding: 10px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;

    span {
        margin: 0 5px;
    }

    :hover {
        background-color: #e1e1e1;
    }
`;

export const IconSpan = styled.span`
    color: dodgerblue;
    text-align: center;
    font-size: 25px;
`;