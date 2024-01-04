import { useState } from 'react';

export function useCategories() {
  const [open, setOpen] = useState(true);

  const handleOpenModal = () => setOpen(!open);

  return {
    handleOpenModal,
    open,
  };
}
