import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '../modules/Categories/slice';
import bookReducer from '../modules/Books/slice';
import loanReducer from '../modules/Loans/slice';

const rootReducer = combineReducers({
  category: categoryReducer,
  book: bookReducer,
  loan: loanReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
