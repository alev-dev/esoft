import NavBar from '../../Components/NavBar';

function MainLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}

export default MainLayout;
