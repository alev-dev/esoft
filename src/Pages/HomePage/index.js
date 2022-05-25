import './style.css';
import Home from '../../assets/home.png';
import { useSelector } from 'react-redux';
function HomePage() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
        <div className="esoft-home">
            <div className="esoft-home-container">
                <div className="esoft-home-info">
                    <h4 className="esoft-home-container-title">Bem vindo ao eSoft</h4>
                    <p className="esoft-home-container-description">
                        Uma plataforma institucional para gerenciamento de atividades e projetos das disciplinas
                        ministradas pela professora Naan Cardoso.
                    </p>
                </div>
            </div>
            <div className="esoft-home-container">
                <img src={Home} alt="" />
            </div>
        </div>
    );
}

export default HomePage;
