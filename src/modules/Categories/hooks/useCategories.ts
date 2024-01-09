import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import { setCategories } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

export function useCategories() {
  const [open, setOpen] = useState(true);
  const { loading, fetchAllData } = useApi();
  const categories = useSelector((state: RootState) => state.category.categories);
  const dispatch = useDispatch();

  const handleOpenModal = () => setOpen(!open);

  useEffect(() => {
    async function getCategories() {
      const response = await fetchAllData('categories');
      dispatch(setCategories(response.data));
    }

    getCategories();
  }, [fetchAllData, loading]);

  return {
    handleOpenModal,
    open,
    loading,
    categories,
  };
}
