import { Carousel as Gallery } from 'primereact/carousel';
import { useEffect, useState } from "react";
import apiDigitalStore from '../../api/apiDigitalStore';
import ornamento from "../../assets/Ornament.svg";
import Banner from '../../components/Banner';
import Section from '../../components/layout/Section';
import { SectionBanner } from "./style";

const Home = () => {
    const [banners, setBanners] = useState(undefined);

    useEffect(() => {
        apiDigitalStore.getBanners().then((data) => setBanners(data));
        apiDigitalStore.getProdutos(8).then((data) => {
            console.log(data);
        });
     
    }, []);

    const bannerTemplate = (banner) =>  {
        return (
            <Banner banner={banner} />
        );
    };
    
    return ( 
        <>
            <SectionBanner>
                <Gallery 
                    value={banners} 
                    numVisible={1} 
                    numScroll={1} 
                    className="custom-carousel" 
                    circular
                    autoplayInterval={3000} 
                    itemTemplate={bannerTemplate} 
                />
                <img className="img-absolute" src={ornamento} alt="Ornamento" />
            </SectionBanner>  
            <Section 
                activeTitle
                title="Coleções em destaque"
                titleAlign="center"
            ></Section>
        </>
     );
}
 
export default Home;