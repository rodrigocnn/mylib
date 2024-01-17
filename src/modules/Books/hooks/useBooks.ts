import { setBooks, setEnableSearchBooks } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useEffect } from 'react';
import useApi from '../../../hooks/useApi';
import { toast } from 'react-toastify';

export function useBooks() {
  const dispatch = useDispatch();
  const { fetchAllData, deleteData } = useApi();

  const books = useSelector((state: RootState) => state.book.books);
  const enableSearch = useSelector((state: RootState) => state.book.enableSearch);

  useEffect(() => {
    async function getBooks() {
      const response = await fetchAllData('books');
      dispatch(setBooks(response.data));
    }
    getBooks();
  }, [enableSearch, dispatch]);

  const handleClickDelete = async (event: any, id: number) => {
    event.preventDefault();
    const response = await deleteData('books', String(id));
    if (response.status === 200) {
    }
    toast('Registro Excluído com Sucesso', { type: 'success' });
    dispatch(setEnableSearchBooks(true));
  };

  return {
    books,
    handleClickDelete,
  };
}
