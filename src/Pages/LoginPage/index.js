import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slicers/userSlice';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './style.css';
import axios from 'axios';
import { getUser } from '../../common/services/token';
function LoginPage() {
    const [userData, setuserData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(event) {
        const { name, value } = event.target;
        setuserData({ ...userData, [name]: value });
    }

    function handleSubmit() {
        //esoft-bckd.herokuapp.com/
        https: axios
            .post('https://esoft-bckd.herokuapp.com/users/authentication', userData)
            .then((res) => {
                if (res.data.auth) {
                    localStorage.setItem('token', res.data.token);
                    dispatch(setUser(getUser()));

                    return navigate('/content');
                }
                return NotificationManager.error('Usuário ou senha inválidos');
            })
            .catch((err) => {
                NotificationManager.error('Erro no servidor, tente novamente mais tarde', 'Error!', 5000);
            });
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
                        <button onClick={handleSubmit}>Entrar</button>
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
