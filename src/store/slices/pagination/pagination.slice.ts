import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PaginationState = {
  currentPageNumber: number;
  totalPages: number;
};

const initialState: PaginationState = {
  currentPageNumber: 1,
  totalPages: 1,
};

export const paginationSlice = createSlice({
  reducerPath: 'paginationSlice',
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPageNumber: (prevState, action: PayloadAction<number>) => {
      prevState.currentPageNumber = action.payload;
    },
    getTotalPages: (prevState, action: PayloadAction<number>) => {
      prevState.totalPages = action.payload;
    },
  },
});

export const { setCurrentPageNumber, getTotalPages } = paginationSlice.actions;
