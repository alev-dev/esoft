import { useSelector } from 'react-redux';
import AdminBar from '../AdminBar';
import UserBar from '../UserBar';
import './style.css';
function NavBar() {
    const user = useSelector((state) => state.user);

    if (user?.role === 'admin') {
        return <AdminBar />;
    }

    return <UserBar />;
}

export default NavBar;
