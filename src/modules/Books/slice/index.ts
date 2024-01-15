import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBook {
  id_category: number | string;
  title: string;
  author: string;
  created_at?: string;
}

interface BookState {
  open: boolean;
  books: IBook[];
  enableSearch: boolean;
  form: IBook;
}

const INITIAL_FORM = {
  id_category: '' as string,
  title: '',
  author: '',
};

const initialState: BookState = {
  open: false,
  books: [],
  enableSearch: false,
  form: INITIAL_FORM,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
    },

    setEnableSearchCategories: (state, action: PayloadAction<boolean>) => {
      state.enableSearch = action.payload;
    },

    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },

    setForm: (state, action: PayloadAction<{ fieldName: string; fieldValue: string }>) => {
      const { fieldName, fieldValue } = action.payload;
      state.form = { ...state.form, [fieldName]: fieldValue };
    },
    setEnableSearchBooks: (state, action: PayloadAction<boolean>) => {
      state.enableSearch = action.payload;
    },
  },
});

const bookReducer = bookSlice.reducer;
export default bookReducer;
export const { openModal, setEnableSearchBooks, setBooks, setForm } = bookSlice.actions;
