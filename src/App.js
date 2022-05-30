import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './routes/AppRouter';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { useEffect, useState } from 'react';
import { setUser } from './redux/slicers/userSlice';
import { getUser, isAuthenticated } from './common/services/token';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated()) {
            dispatch(setUser(getUser()));
        }
    }, []);

    return (
        <BrowserRouter>
            <NotificationContainer />

            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
