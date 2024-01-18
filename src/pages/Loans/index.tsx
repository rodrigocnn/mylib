import Breadcrumb from '../../components/Breadcrumb';
import TableThree from '../../components/TableThree';
import { ModalLoan } from '../../modules/Loans/components/Modal';
import { useModalLoan } from '../../modules/Loans/hooks/useModalLoan';

const Loans = () => {
  const { handleOpenModal } = useModalLoan();
  return (
    <>
      <Breadcrumb pageName="Empréstimos" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button
            onClick={handleOpenModal}
            className="flex  rounded-md bg-primary py-2.5 px-5.5 font-medium text-white"
          >
            Cadastrar
          </button>
        </div>
        <ModalLoan />
        <TableThree />
      </div>
    </>
  );
};

export default Loans;
