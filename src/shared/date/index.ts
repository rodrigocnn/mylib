export const returnDate = () => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 7);
  return futureDate.toLocaleDateString('pt-BR');
};
