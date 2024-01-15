import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';

import { useModalBook } from '../../hooks/useModalBook';

export function ModalBook() {
  const { open, categories, handleOpenModal, handleInputChange, handleConfirmClick } = useModalBook();

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
        <DialogHeader placeholder={undefined}>Cadastrar Livro</DialogHeader>
        <DialogBody placeholder={undefined}>
          <select
            name=" id_category"
            className="w-full mb-2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
            outline-none transition focus:border-primary active:border-primary disabled:cursor-default
            disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            onChange={handleInputChange}
          >
            {categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Nome do Livro"
            onChange={handleInputChange}
            name="title"
            className="w-full mb-2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
            outline-none transition focus:border-primary active:border-primary disabled:cursor-default
            disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ></input>
          <input
            type="text"
            placeholder="Autor"
            onChange={handleInputChange}
            name="author"
            className="w-full  mb-2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
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
