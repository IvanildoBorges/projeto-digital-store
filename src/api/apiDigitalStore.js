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
    getProdutosFiltros: async (query = [], page = 1, perPage = 15) => {
        try {
            // Buscar filtros completos uma vez para mapear ids para nomes
            const filtrosResposta = await fetch(`${url}/filters`);
            const filtrosJSON = await filtrosResposta.json();
            
            const filtros = filtrosJSON[0] || {};

            // Função para mapear id -> nome do filtro (ex: category id=1 => "Esporte e lazer")
            function getNomeFiltro(name, id) {
                if (!filtros[name]) return null;
                    const item = filtros[name].find(f => {
                    // id pode ser number ou string, faça cast para garantir comparação correta
                    return String(f.id) === String(id);
                });
                return item ? (item[name] || item.brand || item.category || item.gender || item.state || item.type) : null;
            }

            // Montar parâmetros de consulta amigáveis para products
            const params = new URLSearchParams();
            params.append('_page', page);
            params.append('_per_page', perPage);

            if (query.length > 0) {
                query.forEach(({ name, value }) => {
                // Traduzir id para nome do filtro
                const nomeFiltro = getNomeFiltro(name, value);
                if (nomeFiltro) {
                    params.append(name, nomeFiltro);
                } else {
                    // Se não achou o nome, envia o valor original (fallback)
                    params.append(name, value);
                }
                });
            }

            const resposta = await fetch(`${url}/products?${params.toString()}`);
            const produtosJSON = await resposta.json();

            return {
                dados: produtosJSON.data || produtosJSON.products || [],
                porPagina: perPage,
                paginaAtual: page,
                proxima: produtosJSON.next || null,
                anterior: produtosJSON.prev || null,
                totalItens: produtosJSON.items || 0,
                paginasTotais: produtosJSON.pages || 0
            };

        } catch (error) {
            console.error("Erro ao buscar produtos: ", error);
            return {
                dados: [],
                porPagina: perPage,
                paginaAtual: page,
                proxima: null,
                anterior: null,
                totalItens: 0,
                paginasTotais: 0
            };
        }
    },
    getBanners: async (limit = 4) => {
        return await fetch(`${url}/promotions?_limit=${limit}`)
            .then(resposta => resposta.json())
            .then(banners => banners.map(banner => new BannerModel(banner)))
            .catch(error => {
                console.error("Erro ao buscar promoções: ", error);
                return [];
            });
    },
    getFiltros: async () => {
        try {
            const response = await fetch(`${url}/filters`);
            const data = await response.json();

            // 'data' é um array com um único objeto, então usamos data[0]
            const allFilters = data[0];
            const filterNames = Object.keys(allFilters);

            const result = [];

            for (const key of filterNames) {
                const currentArray = allFilters[key];

                for (const item of currentArray) {
                    const text = item[key.slice(0, -1)] || item[key]; // tira o "s" do final de cada chave. Ex: brands -> brand , categorys -> category, etc
                    result.push({
                        text,
                        value: item.id || text,
                        name: `filter.${key}` // exemplo: filter.brand, filter.category
                    });
                }
            }

            return result;
        } catch (error) {
            console.error("Erro ao buscar filtros:", error);
            return [];
        }
    }
}

export default apiDigitalStore;