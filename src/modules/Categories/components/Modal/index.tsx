import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOpenModal, setCategory } from '../../slice';
import { RootState } from '../../../../store';

export function Modal() {
  const openModal = useSelector((state: RootState) => state.category.openModal);
  const category = useSelector((state: RootState) => state.category.category);
  const dispatch = useDispatch();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = event.target.value;
    dispatch(setCategory(newCategory));
  };

  const handleConfirmClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Dialog
        size="sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={openModal}
        placeholder={undefined}
        handler={() => dispatch(handleOpenModal())}
      >
        <DialogHeader placeholder={undefined}>Cadastrar Categoria</DialogHeader>
        <DialogBody placeholder={undefined}>
          <input
            value={category}
            onChange={handleCategoryChange}
            type="text"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
            outline-none transition focus:border-primary active:border-primary disabled:cursor-default
            disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></input>
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            placeholder={'teste'}
            variant="text"
            color="red"
            onClick={() => dispatch(handleOpenModal())}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={handleConfirmClick}
            placeholder={'teste'}
            variant="gradient"
            color="green"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
