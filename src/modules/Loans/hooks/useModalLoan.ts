import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../slice';

import { RootState } from '../../../store';

export function useModalLoan() {
  const dispatch = useDispatch();

  const open = useSelector((state: RootState) => state.loan.open);
  const form = useSelector((state: RootState) => state.loan.form);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const payload = {
      fieldName: event.target.name,
      fieldValue: event.target.value,
    };

    //dispatch(setForm(payload));
  };

  const handleConfirmClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return {
    handleConfirmClick,
    handleInputChange,
    handleOpenModal,
    open,
    form,
  };
}
