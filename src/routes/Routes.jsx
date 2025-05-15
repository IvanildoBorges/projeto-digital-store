import { PrimeReactProvider } from 'primereact/api';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Footer from '../components/layout/Footer.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import Home from '../pages/Home/index.jsx';

 
export function AppRoutes() {
    return (
        <>
        <PrimeReactProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route path='/' element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </PrimeReactProvider>
        </>
    );
}