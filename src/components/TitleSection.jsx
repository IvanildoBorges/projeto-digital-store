import styled from "styled-components";

const Title = styled.button`
    &.title-2 {
        /* ADICIONAR ESTILOS AQUI*/
    }
`;

const TitleSection = ({ children, classe }) => {
    return (
        <Title className={`title-2 ${classe}`} >
            {children}
        </Title>
    );
}
 
export default TitleSection;