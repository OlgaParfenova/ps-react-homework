import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { userSlice } from './slices/user';
import { favoritesSlice } from './slices/favorites';
import { paginationSlice } from './slices/pagination';

const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [favoritesSlice.reducerPath]: favoritesSlice.reducer,
  [paginationSlice.reducerPath]: paginationSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
