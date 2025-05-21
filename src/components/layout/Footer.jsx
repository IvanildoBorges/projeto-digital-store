import styled from "styled-components";

const FooterComponent = styled.footer`
    &.footer-component {
        background-color: chartreuse;
        

        p {
            /* ADICIONAR ESTILOS AQUI*/
        }
    }
`;

const Footer = () => {
    return (
        <FooterComponent className="footer-component">
            <div class="footer-container">
            <div class="footer - section">
                <h3>Digital Store</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore tenetur ipsa odit molestias, deserunt sunt a dicta aperiam repellat accusamus nam consequuntur omnis, inventore, nihil autem nostrum dolorem quo.</p>
                <div class="Social-icons">
                <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
                <a href="#"><img src="intagran-icon.png" alt="Intagran"/></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
                </div>
                <div class="footer-section">
                <h3>Informação</h3>
                <ul>
                    <li><a href="#">Sobre Drip Store</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Trabalhe Conosco</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
                </div>
                <div class="footer-section">
                <h3>Categorias</h3>
                <ul>
                    <li><a href="#"></a>Camisetas</li>
                    <li><a href="#"></a>Calças</li>
                    <li><a href="#"></a>Bonés</li>
                    <li><a href="#"></a>Headphones</li>
                    <li><a href="#"></a>Tênis</li>
                <div class="footer-section"></div>
                <h3>Contatos</h3>
                </ul>
                <p>Av. Santos Dumont, 1510 1º andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p>Telefone: (85)3051-3411</p>
                </div>
            </div>
            </div>
            <div class="footer - section"></div>
            <p class="copyright">@ 2022 Digital College</p>
        </FooterComponent>
    );
}
 
export default Footer;