import Breadcrumb from '../../components/Breadcrumb';

import { ModalBook } from '../../modules/Books/components/Modal';
import { TableBooks } from '../../modules/Books/components/TableBooks';
import { useModalBook } from '../../modules/Books/hooks/useModalBook';

const Books = () => {
  const { handleOpenModal } = useModalBook();
  return (
    <>
      <Breadcrumb pageName="Livros" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button
            onClick={handleOpenModal}
            className="flex  rounded-md bg-primary py-2.5 px-5.5 font-medium text-white"
          >
            Cadastrar
          </button>
        </div>
        <ModalBook />
        <TableBooks />
      </div>
    </>
  );
};

export default Books;
