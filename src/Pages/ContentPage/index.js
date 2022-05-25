import { useSelector } from 'react-redux';
import NotLogged from './NotLogget';
import StudentContent from './Student';
import './style.css';
function ContentPage() {
    const user = useSelector((state) => state.user);
    console.log(user?.userlogged);
    if (user?.userlogged) {
        return <StudentContent />;
    }
    return (
        <div className="esoft-content">
            <NotLogged />
        </div>
    );
}

export default ContentPage;
