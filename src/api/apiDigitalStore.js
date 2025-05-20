import BannerModel from "../models/banner";
import ProductModel from "../models/product";

const url = "http://localhost:3000";

const apiDigitalStore = {
    getProdutos: async (limit) => {
        return await fetch(`${url}/products?_limit=${limit}`)
            .then(resposta => resposta.json())
            .then(produtos => produtos.map(product => new ProductModel(product)))
            .catch(error => {
                console.error("Erro ao buscar produtos: ", error);
                return [];
            });
    },
    getBanners: async (limit = 4) => {
        return await fetch(`${url}/promotions?_limit=${limit}`)
            .then(resposta => resposta.json())
            .then(banners => banners.map(banner => new BannerModel(banner)))
            .catch(error => {
                console.error("Erro ao buscar promoções: ", error);
                return [];
            });
    }
}

export default apiDigitalStore;