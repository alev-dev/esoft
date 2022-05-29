import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { setUser } from '../../redux/slicers/userSlice';
import { FaBars } from 'react-icons/fa';

function AdminBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [optionBar, setoptionBar] = useState(false);
    const user = useSelector((state) => state.user);

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
                <div className="esoft-navbar-logo">
                    <img src={Logo} alt="Esoft" />
                </div>
                <div className="esoft-navbar-menu">
                    <ul className="esoft-navbar-menu-links">
                        <li className="esoft-navbar-menu-item">
                            <Link to="/admin/subjects">Disciplinas</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/admin/students">Alunos</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/admin/chats">Chat</Link>
                        </li>

                        <li className="esoft-navbar-menu-item" onClick={handleLogout}>
                            Logout
                        </li>
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
                                <Link to="/admin/subjects">Disciplinas</Link>
                            </li>
                            <li className="esoft-navbar-menu-item">
                                <Link to="/admin/students">Alunos</Link>
                            </li>
                            <li className="esoft-navbar-menu-item">
                                <Link to="/admin/chats">Chat</Link>
                            </li>

                            <li className="esoft-navbar-menu-item" onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default AdminBar;
