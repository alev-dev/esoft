import './style.css';
import Photo from '../../assets/naan.jfif';
function AboutPage() {
    return (
        <div className="esoft-content">
            <h1>About</h1>
            <img className="about-photo" src={Photo} alt="" />
            <h3>
                Sistema desenvolvido baseado na matéria Topicos Avançados de Software. Sistema tem como objetivo
                integrar aluno e professor para facilitar a comunicação e forma de ensino.
            </h3>
        </div>
    );
}

export default AboutPage;
