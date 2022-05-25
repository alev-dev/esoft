import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userlogged: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.userlogged = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
