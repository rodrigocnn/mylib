import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal, setEnableSearchBooks, setForm } from '../slice';
import { setCategories, setEnableSearchCategories } from '../../Categories/slice';
import { RootState } from '../../../store';
import useApi from '../../../hooks/useApi';
import { toast } from 'react-toastify';

export function useModalBook() {
  const dispatch = useDispatch();
  const { loading, fetchAllData, sendDataPost } = useApi();
  const open = useSelector((state: RootState) => state.book.open);
  const form = useSelector((state: RootState) => state.book.form);
  const categories = useSelector((state: RootState) => state.category.categories);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  useEffect(() => {
    async function getCategories() {
      const response = await fetchAllData('categories');
      dispatch(setCategories(response.data));
      dispatch(setEnableSearchCategories(false));
    }
    getCategories();
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const payload = {
      fieldName: event.target.name,
      fieldValue: event.target.value,
    };

    dispatch(setForm(payload));
  };

  const handleConfirmClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await sendDataPost('books', form);

    if (response.data) {
      toast('Registro Inserido com Sucesso', { type: 'success' });
      dispatch(setEnableSearchBooks(true));

      handleOpenModal();
    } else {
      toast('Não foi possivel realizar operação', { type: 'error' });
      handleOpenModal();
    }
  };

  return {
    handleConfirmClick,
    handleInputChange,
    handleOpenModal,
    open,
    categories,
  };
}
