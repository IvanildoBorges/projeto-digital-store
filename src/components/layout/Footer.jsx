import styled from "styled-components";

const FooterComponent = styled.footer`
    &.footer-component {
        /* ADICIONAR ESTILOS AQUI*/

        p {
            /* ADICIONAR ESTILOS AQUI*/
        }
    }
`;

const Footer = () => {
    return (
        <FooterComponent className="footer-component">
            <p>@ 2025 Digital College</p>
        </FooterComponent>
    );
}
 
export default Footer;