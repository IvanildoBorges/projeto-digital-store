import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-header.svg";
import ButtonCTA from "../ButtonCTA.jsx";
import Input from "../Input.jsx";
import TitleSection from "../TitleSection.jsx";

const HeaderContainer = styled.header`
    &.cabecalho {
        /* ADICIONAR ESTILOS AQUI*/
    }
`;

const Container = styled.header`
    &.container-cabecalho {
        /* ADICIONAR ESTILOS AQUI*/
    }
`;

const RightActions = styled.div`
    &.botoes-e-acoes {
        /* ADICIONAR ESTILOS AQUI*/

        .cart-btn {
            /* ADICIONAR ESTILOS AQUI*/

            button .icone {
                /* ADICIONAR ESTILOS AQUI*/
            }

            .count-orders-cart {
                /* ADICIONAR ESTILOS AQUI*/
            }
        }
    }
`;

const AsideMenu = styled.aside`
    &.aside-menu {
        /* ADICIONAR ESTILOS AQUI*/

        .content-menu {
            /* ADICIONAR ESTILOS AQUI*/

            ul {
                /* ADICIONAR ESTILOS AQUI*/

                .nav-link {
                    /* ADICIONAR ESTILOS AQUI*/
                }
                .nav-link.active {
                    /* ADICIONAR ESTILOS AQUI*/
                }
            }
        }
    }
`;

const Header = () => {

    const irParaLogin = () => {
        /* ADICIONAR INTERAÇÃO AQUI */
    }

    return (
        <HeaderContainer id="cabecalho" className="cabecalho">
            <Container className="container-cabecalho">
                <box-icon size="sm" name='menu' className="icone" ></box-icon>
                <img src={logo} alt="Logotipo" className="logotipo" />
                <RightActions className="botoes-e-acoes">
                    <Input 
                        tipo="texto" 
                        apelido="Pesquisar Produto..." 
                        icone={ <i className="pi pi-search"></i> } 
                    />
                    <Link to='/cadastro' className="nav-link sublinhado cinza">Cadastre-se</Link>
                    <ButtonCTA texto="Entrar" funcao={() => irParaLogin} />
                    <div className="cart-btn">
                        <button>
                            <i className="pi pi-cart-minus icone"></i>
                        </button>
                        <span className="count-orders-cart">2</span>
                    </div>
                </RightActions>
            </Container>
            <AsideMenu className="aside-menu">
                <div className="content-menu">
                    <TitleSection>Páginas</TitleSection>
                    <ul className="navlist-menu">
                        <NavLink 
                            to="/" 
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/products" 
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}
                        >
                            Produtos
                        </NavLink>
                        <NavLink 
                            to="/categories" 
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}
                        >
                            Categorias
                        </NavLink>
                        <NavLink 
                            to="/orders" 
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}
                        >
                            Meus Pedidos
                        </NavLink>
                    </ul>
                </div>
            </AsideMenu>
        </HeaderContainer>
    );
};

export default Header;