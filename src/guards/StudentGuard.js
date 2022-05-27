import { getUser } from '../common/services/token';
import { Navigate } from 'react-router-dom';
//Guard to check if the user is a student
export default function ({ children }) {
    const user = getUser();
    if (user && user.role === 'Aluno') return children;
    else return <Navigate to="/authentication/login" />;
}
{
}
