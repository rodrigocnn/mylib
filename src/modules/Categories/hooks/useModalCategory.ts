import useApi from '../../../hooks/useApi';
import { setCategory, openModal, setEnableSearchCategories } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { toast } from 'react-toastify';

export function useModalCategory() {
  const dispatch = useDispatch();
  const { loading, sendDataPost } = useApi();
  const category = useSelector((state: RootState) => state.category.category);
  const open = useSelector((state: RootState) => state.category.open);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = event.target.value;
    dispatch(setCategory(newCategory));
  };

  const handleConfirmClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await sendDataPost('categories', { title: category });

    if (response.data) {
      toast('Registro Inserido com Sucesso', { type: 'success' });
      dispatch(setEnableSearchCategories(true));
      handleOpenModal();
    } else {
      toast('Não foi possivel realizar operação', { type: 'error' });
      handleOpenModal();
    }
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return {
    handleCategoryChange,
    handleConfirmClick,
    handleOpenModal,
    loading,
    open,
    category,
  };
}
