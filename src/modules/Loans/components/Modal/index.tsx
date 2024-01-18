import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import Input from '../../../../components/Input';
import { useModalLoan } from '../../hooks/useModalLoan';
import Select from '../../../../components/Select';

export function ModalLoan() {
  const { open, form, handleOpenModal, handleConfirmClick } = useModalLoan();

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
        <DialogHeader placeholder={undefined}>Realizar Empréstimo</DialogHeader>
        <DialogBody placeholder={undefined}>
          <Select onChange={() => {}}>
            <option value={1} key={1}>
              Selecione um Livro
            </option>
            <option value={1} key={1}>
              Pai Rico Pai Pobre
            </option>
          </Select>

          <Select onChange={() => {}}>
            <option value={1} key={1}>
              Selecione um Usuário
            </option>
            <option value={1} key={1}>
              Rodrigo César
            </option>
          </Select>

          <Input disabled value={form.returnDate} type="text" placeholder="Data da Devolução" name="title" />
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
