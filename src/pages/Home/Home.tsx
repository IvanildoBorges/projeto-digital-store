import {
    Subtitle,
    Title,
    Welcome
} from "./style";

const Home = () => {
    return ( 
        <Welcome className="beggin">
            <Title>Hello world!</Title>
            <Subtitle>A project react with typescript.</Subtitle>
        </Welcome>
     );
}
 
export default Home;