import styled from "styled-components";

export const ContactsArticle = styled.article`
    width: 800px;

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
                justify-content: space-between;
                
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

export const IconSpan = styled.span`
    color: darkblue;
    text-align: center;
    font-size: 25px;
`;