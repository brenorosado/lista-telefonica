import { MenuNav } from "../styles/navbar";

const NavBar = () => {

    return (
        <MenuNav>
            <ul>
                <li><a href="/">Todos contatos</a></li>
                <li><a href="/cadastrar">Adicionar contato</a></li>
            </ul>
        </MenuNav>
    );
};

export default NavBar;