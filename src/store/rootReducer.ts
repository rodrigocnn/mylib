import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '../modules/Categories/slice';
import bookReducer from '../modules/Books/slice';

const rootReducer = combineReducers({
  category: categoryReducer,
  book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
