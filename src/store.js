import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/slicers/userSlice';
export default configureStore({
    reducer: {
        user: userReducer,
    },
});
