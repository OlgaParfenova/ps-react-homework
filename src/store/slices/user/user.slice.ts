import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserState = {
  user: {
    name: string;
  } | null;
};

const localStorageData = localStorage.getItem('user');

const initialState: UserState = {
  user: localStorageData ? (JSON.parse(localStorageData) as UserState['user']) : null,
};

export const userSlice = createSlice({
  reducerPath: 'userSlice',
  name: 'user',
  initialState,
  reducers: {
    addUser: (prevState, action: PayloadAction<string>) => {
      prevState.user = {
        name: action.payload,
      };
    },
    logout: (prevState) => {
      prevState.user = null;
    },
  },
});

export const { addUser, logout } = userSlice.actions;
