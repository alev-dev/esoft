import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { setUser } from '../../redux/slicers/userSlice';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function UserBar() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [optionBar, setoptionBar] = useState(false);

    const handleLogout = () => {
        setoptionBar(false);
        localStorage.removeItem('token');
        dispatch(setUser(null));
        navigate('/');
    };

    const handleOptionBar = () => {
        setoptionBar(!optionBar);
    };

    return (
        <nav className="esoft-navbar">
            <div className="esoft-navbar-container">
                <Link to="/">
                    <div className="esoft-navbar-logo">
                        <img src={Logo} alt="Esoft" />
                    </div>
                </Link>
                <div className="esoft-navbar-menu">
                    <ul className="esoft-navbar-menu-links">
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
                    <button className="esoft-navbar-menu-showOptions" onClick={handleOptionBar}>
                        <FaBars />
                    </button>
                    {optionBar && (
                        <ul
                            className="esoft-navbar-menu-links-mobile"
                            onClick={() => {
                                setoptionBar(false);
                            }}
                        >
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
                    )}
                </div>
            </div>
        </nav>
    );
}

export default UserBar;
