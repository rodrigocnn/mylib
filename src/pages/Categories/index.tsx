import { useDispatch } from 'react-redux';

import Breadcrumb from '../../components/Breadcrumb';
import TableThree from '../../components/TableThree';
import { Modal } from '../../modules/Categories/components/Modal';
import { handleOpenModal } from '../../modules/Categories/slice';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Breadcrumb pageName="Categorias" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button
            onClick={() => dispatch(handleOpenModal())}
            className="flex rounded-md bg-primary py-2.5 px-5.5 font-medium text-white"
          >
            Cadastrar
          </button>
        </div>
        <Modal />
        <TableThree />
      </div>
    </>
  );
};

export default Categories;
