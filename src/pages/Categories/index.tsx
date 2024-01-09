import Breadcrumb from '../../components/Breadcrumb';
import { Modal } from '../../modules/Categories/components/Modal';
import { TableCategories } from '../../modules/Categories/components/TableCategories';
import { useModalCategory } from '../../modules/Categories/hooks/useModalCategory';

const Categories = () => {
  const { handleOpenModal } = useModalCategory();

  return (
    <>
      <Breadcrumb pageName="Categorias" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button
            onClick={handleOpenModal}
            className="flex rounded-md bg-primary
            py-2.5 px-5.5 font-medium text-white"
          >
            Cadastrar
          </button>
        </div>
        <Modal />
        <TableCategories />
      </div>
    </>
  );
};

export default Categories;
