import styled from "styled-components";

export const MenuNav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    color: white;

    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
            font-weight: bold;
            margin: 0 10px;

            a {
                color: white;
                cursor: pointer;
                text-decoration: none;
                transition: color 0.2s;

                :hover {
                    color: dodgerblue;
                }
            }
        }
    }
`;