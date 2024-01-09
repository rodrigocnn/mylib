import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
  category: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    handleOpenModal: (state) => {
      state.openModal = !state.openModal;
      state.category = '';
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const { handleOpenModal, setCategory } = categorySlice.actions;
