import styled from "styled-components";

const ContainerInput = styled.div`
    &.input-component {
        /* ADICIONAR ESTILOS AQUI*/
    }
`;

const CampoDeEntrada = styled.input`
    &.input {
        /* ADICIONAR ESTILOS AQUI*/
    }
`;

const Input = ({ tipo = "text", apelido, classe, icone, funcao }) => {
    return (
        <ContainerInput className="input-component">
            <CampoDeEntrada 
                type={tipo}
                className={`input ${classe}`} 
                onChange={funcao} 
                placeholder={apelido}
            />
            {icone}
        </ContainerInput>
    );
}
 
export default Input;