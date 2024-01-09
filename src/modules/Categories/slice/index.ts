import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICategory {
  id: number;
  title: string;
}

interface CategoryState {
  open: boolean;
  category: string;
  categories: ICategory[];
}

const initialState: CategoryState = {
  open: false,
  category: '',
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
      state.category = '';
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    setCategories: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const { openModal, setCategory, setCategories } = categorySlice.actions;
