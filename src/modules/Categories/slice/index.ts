import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    handleOpenModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const { handleOpenModal } = categorySlice.actions;
