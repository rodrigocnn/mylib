import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import { setCategories, setEnableSearchCategories } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toast } from 'react-toastify';

export function useCategories() {
  const [open, setOpen] = useState(true);
  const { loading, fetchAllData, deleteData } = useApi();
  const categories = useSelector((state: RootState) => state.category.categories);
  const enableSearch = useSelector((state: RootState) => state.category.enableSearch);
  const dispatch = useDispatch();
  const handleOpenModal = () => setOpen(!open);

  useEffect(() => {
    async function getCategories() {
      const response = await fetchAllData('categories');
      dispatch(setCategories(response.data));
      dispatch(setEnableSearchCategories(false));
    }
    getCategories();
  }, [enableSearch, dispatch]);

  const handleClickDelete = async (event: any, id: number) => {
    event.preventDefault();
    const response = await deleteData('categories', String(id));
    if (response.status === 200) {
    }
    toast('Registro Excluído com Sucesso', { type: 'success' });
    dispatch(setEnableSearchCategories(true));
  };

  return {
    handleOpenModal,
    handleClickDelete,
    open,
    loading,
    categories,
  };
}
