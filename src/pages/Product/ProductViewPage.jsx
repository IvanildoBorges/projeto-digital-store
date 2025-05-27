import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiDigitalStore from "../../api/apiDigitalStore";
import Breadcrumb from "../../components/BreadCrumb";
import { productEmpty } from "../../models/product";
import { SectionBreadCrumb, SectionProductInfo } from "./style";

const ProductViewPage = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState(productEmpty);

    useEffect(() => {
        buscaProduto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function buscaProduto () {
        const dataProduto = await apiDigitalStore.getProdutoById(id);

        if (dataProduto) {
            setProduto(dataProduto);
        }
    }

    return ( 
        <>
            <SectionBreadCrumb activeTitle={false}>
                <Breadcrumb 
                    items={[
                        { label: "Home", link: "/" },
                        { label: "Produtos", link: "/products" },
                        { label: produto.type, link: "" },
                        { label: produto.title, link: "" },
                    ]} 
                />
            </SectionBreadCrumb>
            <SectionProductInfo activeTitle={false}>
                {/* Gallery, Buy Box e Produtos Recomendados */}
            </SectionProductInfo>
        </>
    );
}
 
export default ProductViewPage;