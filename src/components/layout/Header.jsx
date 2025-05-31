import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import apiDigitalStore from "../../api/apiDigitalStore";
import logo from "../../assets/logo-header.svg";
import { grayScaleColors } from "../../styles/colors/cores.js";
import ButtonCTA from "../ButtonCTA.jsx";
import CardSearch from "../CardSearchProduct.jsx";
import Input from "../Input.jsx";
import TitleSection from "../TitleSection.jsx";


const HeaderContainer = styled.header`
    &.cabecalho {
        /* ADICIONAR ESTILOS AQUI*/

        .container-search {
            background-color: ${grayScaleColors.white};
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            z-index: 2000;
            padding: 1rem;
            border-radius: .5rem;
            
            a:not(:last-child) {
                margin-bottom: 2rem;
            }

            a:last-child {
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 769px) {
        &.cabecalho {
            .container-search {
                padding: .5rem;
                
                a:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }
        }
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
    const [termoBusca, setTermoBusca] = useState("");
    const [resultados, setResultados] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const inputRef = useRef(null);
    const modalRef = useRef(null);
    const location = useLocation();

    // Reseta o campo de busca e oculta o modal ao trocar de rota
    useEffect(() => {
        setTermoBusca("");
        setMostrarModal(false);
        setResultados([]);
    }, [location.pathname]);

    // Executa a busca com debounce quando o termo de busca muda
    useEffect(() => {
        const timeout = setTimeout(buscarProdutos, 300); // debounce
        return () => clearTimeout(timeout);
    }, [termoBusca]);

    // Fecha o modal ao clicar fora do campo de entrada e do modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                setMostrarModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const buscarProdutos = async () => {
        if (termoBusca.trim().length === 0) {
            setResultados([]);
            return;
        }

        try {
            const produtos = await apiDigitalStore.getProdutosPorTitulo(termoBusca);
            setResultados(produtos.filter(p =>
                p.title.toLowerCase().includes(termoBusca.toLowerCase())
            ));
        } catch (erro) {
            console.error("Erro na busca:", erro);
            setResultados([]);
        }
    };

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

                        valor={termoBusca}
                        funcao={(e) => {
                            const valor = e.target.value;
                            setTermoBusca(valor);
                            setMostrarModal(valor.length > 0);
                        }}
                        foco={() => {
                            if (termoBusca.trim().length > 0) {
                                buscarProdutos();
                                setMostrarModal(true);
                            }
                        }}
                        referencia={inputRef}
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
            {mostrarModal && resultados.length > 0 && (
                <div 
                    ref={modalRef}
                    className="container-search"
                    style={{
                        position: 'absolute',
                        top: inputRef.current?.offsetTop + inputRef.current?.offsetHeight || 0,
                        left: inputRef.current?.offsetLeft || 0,
                        width: inputRef.current?.offsetWidth || '300px',
                    }}
                >
                    {resultados.map((produto, index) => index < 4 && (
                        <CardSearch 
                            to={`/products/product/${produto.id}`} 
                            key={produto.id} 
                            funcao={() => {
                                setMostrarModal(false);
                                setTermoBusca("");
                            }}
                            search={termoBusca}
                            produto={produto}
                        />
                    ))}
                    <Link 
                        to={`/products?search=${termoBusca}`}
                        onClick={() => {
                            setMostrarModal(false);
                            setTermoBusca("");
                        }}
                    >
                        <span className="text__link">{resultados.length} resultado(s) encontrado(s)</span>
                    </Link>
                </div>
            )}
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