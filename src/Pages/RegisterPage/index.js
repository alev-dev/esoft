import axios from 'axios';
import { useState } from 'react';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function RegisterPage() {
    const [userData, setuserData] = useState({ email: '', password: '', confirmPassword: '', name: '', semester: 1 });
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setuserData({ ...userData, [name]: value });
    }

    function handleSubmit() {
        if (validateDates()) {
            axios
                .post('https://esoft-bckd.herokuapp.com/users', userData)
                .then((res) => {
                    NotificationManager.success('COnta criada com sucesso', 'Sucesso', 3000);
                    return navigate('/authentication/login');
                })
                .catch((err) => {
                    NotificationManager.error('Erro no sistema ', 'Error!', 4000);
                });
        }
    }

    const validateDates = () => {
        if (!userData.email.includes('@ftc.edu.br')) {
            NotificationManager.error('Somente emails institucionais são permitidos', 'Error!', 4000);
            return false;
        }

        if (userData.password.length === 0) {
            NotificationManager.error('Preencha o campo senha', 'Error!', 4000);
            return false;
        }

        if (userData.password !== userData.confirmPassword) {
            NotificationManager.error('Senhas não conferem', 'Error!', 4000);
            return false;
        }

        if (userData.password.length < 6) {
            NotificationManager.error('Senha deve ter no mínimo 6 caracteres', 'Error!', 4000);
            return false;
        }

        return true;
    };

    return (
        <div className="esoft-login">
            <div className="esoft-login-container">
                <div className="esoft-login-title">Cadastro</div>
                <div className="esoft-login-form">
                    <form>
                        <div className="esoft-login-form-field">
                            <label htmlFor="email">Nome</label>
                            <input type="name" id="name" name="name" onChange={handleChange} />
                        </div>
                        <div className="esoft-login-form-field">
                            <label htmlFor="email">Email Institucional</label>
                            <input type="email" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="esoft-login-form-field">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <div className="esoft-login-form-field">
                            <label htmlFor="password">Confirmar Senha</label>
                            <input type="password" id="password" name="confirmPassword" onChange={handleChange} />
                        </div>
                        <div className="esoft-login-form-field">
                            <label htmlFor="password">Semestre</label>
                            <input
                                type="number"
                                id="semester"
                                name="semester"
                                value={userData?.semester}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div className="esoft-login-form-button">
                        <button className="esoft-login-form-button-btn" onClick={handleSubmit}>
                            Cadastrar dados
                        </button>
                    </div>
                </div>
                <p>
                    Já tem conta? ... <Link to="/authentication/login"> Faz Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
