import { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import axios from 'axios';
function SubjectContent() {
    const [subject, setsubject] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://esoft-bckd.herokuapp.com/subjects/${id}`).then((res) => {
            setsubject(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="esoft-student-content">
            <div className="esoft-student-content-section">
                <h3>Conteudo</h3>
                <div className="esoft-student-content-list">
                    {!subject?.content?.length && <p>Não tem nenhum conteudo no sistema</p>}

                    {subject?.content?.map((content, index) => (
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
                    {!subject?.ativities?.length && <p>Não tem nenhuma atividade no sistema</p>}
                    {subject?.ativities?.map((ativities, index) => (
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
            <div className="esoft-student-content-section">
                <h3>Videos</h3>
                <div className="esoft-student-content-list">
                    {!subject?.videos?.length && <p>Não tem nenhum Video no sistema</p>}

                    {subject?.videos?.map((video, index) => (
                        <div key={index} className="esoft-student-content-list-item">
                            <div className="esoft-student-content-list-item-title">{video.title}</div>

                            <div className="esoft-student-content-list-item-image">
                                <img src={video.background} alt="" />
                            </div>
                            <div className="esoft-student-content-list-item-footer">
                                <Link to={`video/${video._id}`}>
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

export default SubjectContent;
