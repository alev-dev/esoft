import { Link } from 'react-router-dom';

function NotLogged() {
    return (
        <div className="esoft-content-notlogged">
            <h3>Para accessar ao conteudo você precisa logar no sistema</h3>

            <Link to="/authentication/login">
                <button>Login</button>
            </Link>
        </div>
    );
}

export default NotLogged;
