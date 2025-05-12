import styled from "styled-components";

const Button = styled.button`
    &.btn-cta {
        cursor: pointer;
    }
`;

const ButtonCTA = ({ children, classe, funcao }) => {
    return (
        <Button className={`btn-cta ${classe}`} onClick={funcao} >
            {children}
        </Button>
    );
}
 
export default ButtonCTA;