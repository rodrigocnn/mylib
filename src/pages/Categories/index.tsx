import Breadcrumb from '../../components/Breadcrumb';

import TableThree from '../../components/TableThree';
import { Modal } from '../../modules/Categories/components/Modal';
import { useCategories } from '../../modules/Categories/hooks/useCategories';

const Categories = () => {
  const { handleOpenModal, open } = useCategories();

  return (
    <>
      <Breadcrumb pageName="Categorias" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button
            onClick={handleOpenModal}
            className="flex rounded-md bg-primary py-2.5 px-5.5 font-medium text-white"
          >
            Cadastrar
          </button>
        </div>
        <Modal open={open} handleOpen={handleOpenModal} />
        <TableThree />
      </div>
    </>
  );
};

export default Categories;
