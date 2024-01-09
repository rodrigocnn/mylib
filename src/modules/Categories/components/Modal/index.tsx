import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';

import { useModalCategory } from '../../hooks/useModalCategory';

export function Modal() {
  const { open, category, handleConfirmClick, handleCategoryChange, handleOpenModal } = useModalCategory();

  return (
    <>
      <Dialog
        size="sm"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={open}
        placeholder={undefined}
        handler={handleOpenModal}
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
          <Button placeholder={'teste'} variant="text" color="red" onClick={handleOpenModal} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button onClick={handleConfirmClick} placeholder={'teste'} variant="gradient" color="green">
            <span>Cadastrar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
