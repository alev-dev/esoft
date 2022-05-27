import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function ContentPage() {
    const [subjects, setsubjects] = useState([]);
    useEffect(() => {
        axios.get('https://esoft-bckd.herokuapp.com/subjects').then((res) => {
            setsubjects(res.data);
        });
    }, []);

    return (
        <div className="esoft-content">
            <div className="esoft-content-title">
                <h2>Disciplinas Disponíveis</h2>
            </div>
            <div className="esoft-content-subjects">
                {subjects.map((subject, index) => {
                    return (
                        <div key={index}>
                            <Link to={`${subject._id}`}>
                                <div className="esoft-content-subjects-subject">
                                    <div className="esoft-content-subjects-subject-title">{subject.title}</div>
                                    <div className="esoft-content-subjects-subject-image">
                                        <img src={subject.image} alt="" />
                                    </div>
                                    <div className="esoft-content-subjects-subject-teacher">{`Docente : ${subject.teacher}`}</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ContentPage;
