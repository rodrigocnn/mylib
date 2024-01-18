import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import { setEnableSearchLoans, setLoans } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toast } from 'react-toastify';

export function useLoans() {
  const [open, setOpen] = useState(true);
  const { loading, fetchAllData, deleteData } = useApi();
  const loans = useSelector((state: RootState) => state.loan.loans);
  const enableSearch = useSelector((state: RootState) => state.loan.enableSearch);
  const dispatch = useDispatch();
  const handleOpenModal = () => setOpen(!open);

  useEffect(() => {
    async function getLoans() {
      const response = await fetchAllData('loans');
      dispatch(setLoans(response.data));
      dispatch(setEnableSearchLoans(false));
    }
    getLoans();
  }, [enableSearch, dispatch]);

  const handleClickDelete = async (event: any, id: number) => {
    event.preventDefault();
    const response = await deleteData('categories', String(id));
    if (response.status === 200) {
    }
    toast('Registro Excluído com Sucesso', { type: 'success' });
    dispatch(setEnableSearchLoans(true));
  };

  return {
    handleOpenModal,
    handleClickDelete,
    open,
    loading,
    loans,
  };
}
