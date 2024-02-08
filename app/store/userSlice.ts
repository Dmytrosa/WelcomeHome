import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: '',
  userId: '',
  name: '',
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      const { accessToken, role, userId, userName, email } = action.payload;
      state.name = userName;
      state.role = role;
      state.userId = userId;
      state.email = email;
      state.token = accessToken;
    },
    updateToken(state, action) {
      state.token = action.payload.accessToken;
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { updateUser, updateToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
