import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from "react";
import ornamento from "../../assets/Ornament.svg";
import { Section } from "./style";
import destaqueIMG from "/White-Sneakers.png";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const api = {
        getBanners: async () => {
            return [
                {
                    impacto: "Melhores ofertas personalizadas",
                    titulo: "Queima de stoque Nike 🔥",
                    subtitulo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
                    imagem: destaqueIMG
                },
                {
                    impacto: "Melhores ofertas personalizadas",
                    titulo: "Queima de stoque Nike 🔥",
                    subtitulo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
                    imagem: destaqueIMG
                },
                {
                    impacto: "Melhores ofertas personalizadas",
                    titulo: "Queima de stoque Nike 🔥",
                    subtitulo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
                    imagem: destaqueIMG
                },
                {
                    impacto: "Melhores ofertas personalizadas",
                    titulo: "Queima de stoque Nike 🔥",
                    subtitulo: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
                    imagem: destaqueIMG,
                    textoAlternativo: "Produto destaque"
                }
            ]
        },
    };

    useEffect(() => {
        api.getBanners().then((data) => setBanners(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const bannerTemplate = (banner) => {
        return (
            <div className="banner__container">
                <div className="left__content">
                    <p className="impact__text">{banner.impacto}</p>
                    <h1>{banner.titulo}</h1>
                    <p className="subtitle">{banner.subtitulo}</p>
                    <button className="primary-button">Ver Ofertas</button>
                </div>
                <div className="right__content">
                    <img src={banner.imagem} alt={banner.textoAlternativo} />
                </div>
            </div>
        );
    };
    
    return ( 
        <>
            <Section className="banner">
                <Carousel 
                    value={banners} 
                    numVisible={1} 
                    numScroll={1} 
                    className="custom-carousel" 
                    circular
                    autoplayInterval={3000} 
                    itemTemplate={bannerTemplate} 
                />
                <img className="img-absolute" src={ornamento} alt="Ornamento" />
            </Section>
        </>
     );
}
 
export default Home;