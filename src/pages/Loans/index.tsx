import Breadcrumb from '../../components/Breadcrumb';
import TableThree from '../../components/TableThree';

const Loans = () => {
  return (
    <>
      <Breadcrumb pageName="Empréstimos" />

      <div className="flex flex-col gap-5">
        <div className="px-0 ">
          <button className="flex  rounded-md bg-primary py-2.5 px-5.5 font-medium text-white">
            Cadastrar
          </button>
        </div>
        <TableThree />
      </div>
    </>
  );
};

export default Loans;
