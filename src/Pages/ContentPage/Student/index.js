import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function StudentContent() {
    const [content, setcontent] = useState([
        { title: 'novo conteundo ', description: 'descricao do novo conteudo', created_at: '2020-05-05' },
    ]);
    const [ativities, setativities] = useState([
        { title: 'nova atividade ', description: 'descricao da nova atividade', created_at: '2021-05-05' },
    ]);
    return (
        <div className="esoft-student-content">
            <div className="esoft-student-content-section">
                <h3>Conteudo</h3>
                <div className="esoft-student-content-list">
                    {content.map((content, index) => (
                        <div key={index} className="esoft-student-content-list-item">
                            <div className="esoft-student-content-list-item-title">{content.title}</div>

                            <div className="esoft-student-content-list-item-description">
                                <p>{content.description}</p>
                            </div>
                            <div className="esoft-student-content-list-item-footer">
                                <Link to="/content">
                                    <button>Acessar</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="esoft-student-content-section">
                <h3>Atividades</h3>
                <div className="esoft-student-content-list">
                    {ativities.map((ativities, index) => (
                        <div key={index} className="esoft-student-content-list-item">
                            <div className="esoft-student-content-list-item-title">{ativities.title}</div>

                            <div className="esoft-student-content-list-item-description">
                                <p>{ativities.description}</p>
                            </div>
                            <div className="esoft-student-content-list-item-footer">
                                <Link to="/content">
                                    <button>Acessar</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudentContent;
