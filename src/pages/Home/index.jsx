import { Carousel as Gallery } from 'primereact/carousel';
import { useEffect, useState } from "react";
import apiDigitalStore from '../../api/apiDigitalStore';
import CalcaBoneSVG from '../../assets/CalcaBoneSVG';
import CamisetaSVG from '../../assets/CamisetaSVG';
import HeadsetSVG from '../../assets/HeadsetSVG';
import ornamento from "../../assets/Ornament.svg";
import TenisSVG from '../../assets/TenisSVG';
import Banner from '../../components/Banner';
import {
    SectionBanner,
    SectionHighlights
} from "./style";

const Home = () => {
    const [banners, setBanners] = useState([]);

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
            <SectionBanner activeTitle={false} >
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
            <SectionHighlights title="Coleções em destaque">
                <ul className="highlights">
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-1.png" alt="Coleção destaque" />
                        </a>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-2.png" alt="Coleção destaque" />
                        </a>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-3.png" alt="Coleção destaque" />
                        </a>
                    </li>
                </ul>
            </SectionHighlights>
            <SectionHighlights title="Coleções em destaque" titleAlign="center" className="center-highlight" >
                <ul className="highlights center">
                    <li className="highlight__item">
                        <a href="">
                            <CamisetaSVG classe="active" />
                        </a>
                        <span className="name__item">Camisetas</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <CalcaBoneSVG />
                        </a>
                        <span className="name__item">Calças</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <CalcaBoneSVG />
                        </a>
                        <span className="name__item">Bonés</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <HeadsetSVG />
                        </a>
                        <span className="name__item">Headphones</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <TenisSVG />
                        </a>
                        <span className="name__item">Tênis</span>
                    </li>
                </ul>
            </SectionHighlights>
        </>
     );
}
 
export default Home;