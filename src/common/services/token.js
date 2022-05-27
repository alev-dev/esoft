import jwt_decode from 'jwt-decode';
export const getUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return jwt_decode(token);
    }
    return null;
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        console.log(decoded.exp, currentTime);
        if (decoded.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }
        return true;
    }
    return false;
};

export const isAdmin = () => {
    const user = getUser();
    if (user) {
        return user.role === 'professor';
    }
    return false;
};
