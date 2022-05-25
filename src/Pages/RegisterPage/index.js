import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
function RegisterPage() {
    const [userData, setuserData] = useState({ email: '', password: '', confirmPassword: '', name: '' });
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setuserData({ ...userData, [name]: value });
    }

    function handleSubmit() {
        console.log(userData);

        return navigate('/authentication/login');
    }

    return (
        <div className="esoft-login">
            <div className="esoft-login-container">
                <div className="esoft-login-title">Cadastro</div>
                <div className="esoft-login-form">
                    <form>
                        <div className="esoft-login-form-field">
                            <label htmlFor="email">Nome</label>
                            <input type="email" id="email" name="email" onChange={handleChange} />
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
                            <input type="password" id="password" name="password" onChange={handleChange} />
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
