import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import { setCategories, setEnableSearchCategories } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

export function useCategories() {
  const [open, setOpen] = useState(true);
  const { loading, fetchAllData } = useApi();
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

  return {
    handleOpenModal,
    open,
    loading,
    categories,
  };
}
