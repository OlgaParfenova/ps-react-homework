import { AppDispatch, RootState } from '../../../store';
import { PaginationState, setCurrentPageNumber } from '../pagination.slice';

export const setCurrentPageNumberThunk = function (
  currentPageNumber: PaginationState['currentPageNumber'],
) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(setCurrentPageNumber(currentPageNumber));
    localStorage.setItem('currentPage', JSON.stringify(currentPageNumber));
  };
};
