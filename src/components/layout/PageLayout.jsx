import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Main from "./Main.jsx";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default PageLayout;