import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { returnDate } from '../../../shared/date';

interface ILoan {
  id: number;
  idBook: number | string;
  idUser: number | string;
  status: string;
  returnDate: string;
}

const INITIAL_FORM = {
  id: 0,
  idBook: '' as string,
  idUser: '' as string,
  status: '',
  returnDate: returnDate(),
};

interface LoanState {
  open: boolean;
  form: ILoan;
  enableSearch: boolean;
  loans: ILoan[];
}

const initialState: LoanState = {
  open: false,
  form: INITIAL_FORM,
  enableSearch: false,
  loans: [],
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = !state.open;
    },

    setLoan: (state, action: PayloadAction<ILoan>) => {
      state.form = action.payload;
    },

    setLoans: (state, action: PayloadAction<ILoan[]>) => {
      state.loans = action.payload;
    },

    setEnableSearchCategories: (state, action: PayloadAction<boolean>) => {
      state.enableSearch = action.payload;
    },
  },
});

const loanReducer = loanSlice.reducer;
export default loanReducer;
export const { openModal, setLoan, setLoans, setEnableSearchCategories } = loanSlice.actions;
