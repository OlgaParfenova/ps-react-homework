import { AppDispatch, RootState } from '../../../store';
import { PaginationState, getTotalPages } from '../pagination.slice';

export const getTotalPagesThunk = function (totalPages: PaginationState['totalPages']) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(getTotalPages(totalPages));
    localStorage.setItem('totalPages', JSON.stringify(totalPages));
  };
};
