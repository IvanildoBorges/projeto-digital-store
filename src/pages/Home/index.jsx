import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from "react";
import apiDigitalStore from '../../api/apiDigitalStore';
import ornamento from "../../assets/Ornament.svg";
import { Section } from "./style";

const Home = () => {
    const [banners, setBanners] = useState(undefined);

    useEffect(() => {
        apiDigitalStore.getBanners().then((data) => setBanners(data));
        apiDigitalStore.getProdutos(8).then((data) => {
            console.log(data);
        });
     
    }, []);

    const bannerTemplate = (banner) => {
        return (
            <div className="banner__container">
                <div className="left__content">
                    <p className="impact__text">{banner.impact}</p>
                    <h1>{banner.title}</h1>
                    <p className="subtitle">{banner.subtitle}</p>
                    <button className="primary-button">Ver Ofertas</button>
                </div>
                <div className="right__content">
                    <img src={banner.image} alt={banner.alt} />
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