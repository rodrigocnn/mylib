import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOpenModal } from '../../slice';

export function Modal() {
  // @ts-ignore

  const openModal = useSelector((state: RootState) => state.category.openModal);
  const dispatch = useDispatch();

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
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
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
          <Button placeholder={'teste'} variant="gradient" color="green">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
