import { PrimeReactProvider } from 'primereact/api';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout.jsx';
import Home from '../pages/Home/index.jsx';
import ProductViewPage from '../pages/Product/ProductViewPage.jsx';
import ProductListingPage from '../pages/ProductListing/ProductListingPage.jsx';

 
export function AppRoutes() {
    return (
        <>
        <PrimeReactProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<ProductListingPage />} />
                        <Route path='/products/product/:id' element={<ProductViewPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PrimeReactProvider>
        </>
    );
}