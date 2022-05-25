import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function AdminBar() {
    return (
        <nav className="esoft-navbar">
            <div className="esoft-navbar-container">
                <div className="esoft-navbar-logo">
                    <img src={Logo} alt="Esoft" />
                </div>
                <div className="esoft-navbar-menu">
                    <ul>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/home">Conteudo</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/about">novo</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/content">Alunos</Link>
                        </li>
                        <li className="esoft-navbar-menu-item">
                            <Link to="/authentication/login">Chat</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminBar;
