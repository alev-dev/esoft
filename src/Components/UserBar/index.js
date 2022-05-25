import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { setUser } from '../../redux/slicers/userSlice';

function UserBar() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(setUser(null));
        navigate('/');
    };

    return (
        <nav className="esoft-navbar">
            <div className="esoft-navbar-container">
                <div className="esoft-navbar-logo">
                    <img src={Logo} alt="Esoft" />
                </div>
                <div className="esoft-navbar-menu">
                    <ul>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/content">Conteudo</Link>
                        </li>
                        {user?.userlogged ? (
                            <li className="esoft-navbar-menu-item" onClick={handleLogout}>
                                Logout
                            </li>
                        ) : (
                            <li className="esoft-navbar-menu-item">
                                <Link to="/authentication/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default UserBar;
