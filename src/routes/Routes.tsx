import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductPage from '../pages/Product.tsx/Product';
 
export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/product' element={ <ProductPage /> } />
            </Routes>
        </BrowserRouter>
    )
}