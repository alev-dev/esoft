import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slicers/userSlice';
import './style.css';
function LoginPage() {
    const [userData, setuserData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleChange(event) {
        const { name, value } = event.target;
        setuserData({ ...userData, [name]: value });
    }

    function handleSubmit() {
        dispatch(setUser(userData));

        return navigate('/content');
    }

    return (
        <div className="esoft-login">
            <div className="esoft-login-container">
                <div className="esoft-login-title">Login</div>
                <div className="esoft-login-form">
                    <form>
                        <div className="esoft-login-form-field">
                            <label htmlFor="email">Email Institucional</label>
                            <input type="email" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="esoft-login-form-field">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                    </form>
                    <div className="esoft-login-form-button">
                        <button className="esoft-login-form-button-btn" onClick={handleSubmit}>
                            Entrar
                        </button>
                    </div>
                </div>
                <p>
                    Não tem conta? ... <Link to="/authentication/register"> Cadastre-se</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
