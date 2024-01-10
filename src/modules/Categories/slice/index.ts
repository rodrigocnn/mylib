import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICategory {
  id: number;
  title: string;
}

interface CategoryState {
  open: boolean;
  category: string;
  categories: ICategory[];
  enableSearch: boolean;
}

const initialState: CategoryState = {
  open: false,
  category: '',
  categories: [],
  enableSearch: false,
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

    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },

    setEnableSearchCategories: (state, action: PayloadAction<boolean>) => {
      state.enableSearch = action.payload;
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const { openModal, setCategory, setCategories, setEnableSearchCategories } = categorySlice.actions;
