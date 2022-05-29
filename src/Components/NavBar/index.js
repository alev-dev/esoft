import { useSelector } from 'react-redux';
import AdminBar from '../AdminBar';
import UserBar from '../UserBar';
import './style.css';
function NavBar() {
    const user = useSelector((state) => state.user);

    console.log(user);
    if (user?.userlogged?.role === 'Admin') {
        return <AdminBar />;
    }

    return <UserBar />;
}

export default NavBar;
