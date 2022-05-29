import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NotLogged from './NotLogget';
import StudentContent from './Student';
import './style.css';
function ContentPage() {
    const user = useSelector((state) => state.user);

    if (user?.userlogged && user.userlogged.role === 'Aluno') {
        return <Navigate to="/student/content" />;
    }
    if (user?.userlogged && user.userlogged.role === 'Admin') {
        return <Navigate to="/admin/subjects" />;
    }
    return (
        <div className="esoft-content">
            <NotLogged />
        </div>
    );
}

export default ContentPage;
