import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function StudentsPage() {
    const [students, setstudents] = useState([]);

    useEffect(() => {
        axios.get('https://esoft-bckd.herokuapp.com/users/students').then((res) => {
            setstudents(res.data);
        });
    }, []);

    return (
        <>
            <div className="esoft-content">
                <div className="esoft-content-title">
                    <h2>Alunos</h2>
                </div>
                <div className="esoft-content-students">
                    {students.map((student, index) => {
                        return (
                            <div key={index} className="esoft-content-students-list">
                                <Link to={`/students/${student._id}`}>
                                    <div className="esoft-content-students-student">
                                        <div className="esoft-content-students-student-item">{student.name}</div>
                                        <div className="esoft-content-students-student-item">{student.email}</div>
                                        <div className="esoft-content-students-student-item">{student.semester}</div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default StudentsPage;
