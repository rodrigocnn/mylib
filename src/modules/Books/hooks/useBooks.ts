import { setBooks } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useEffect } from 'react';
import useApi from '../../../hooks/useApi';

export function useBooks() {
  const dispatch = useDispatch();
  const { fetchAllData } = useApi();

  const books = useSelector((state: RootState) => state.book.books);
  const enableSearch = useSelector((state: RootState) => state.book.enableSearch);

  useEffect(() => {
    async function getBooks() {
      const response = await fetchAllData('books');
      dispatch(setBooks(response.data));
    }
    getBooks();
  }, [enableSearch, dispatch]);

  return {
    books,
  };
}
