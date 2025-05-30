import {
    Container,
    Curved404,
    CurvedDigit,
    HomeButton,
    MotivationalText
} from "./style";

const NotFound = () => {
  return (
    <Container>
        <Curved404>
            <CurvedDigit $angle={-15}>4</CurvedDigit>
            <CurvedDigit $angle={0}>0</CurvedDigit>
            <CurvedDigit $angle={15}>4</CurvedDigit>
        </Curved404>
        <MotivationalText>Oops! Parece que você se perdeu. Mas não se preocupe, é só voltar para o início!</MotivationalText>
        <HomeButton to="/">Voltar ao Início</HomeButton>
    </Container>
  );
};

export default NotFound;
