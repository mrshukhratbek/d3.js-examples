export const useAddBtnProps = ({ setModal }) => {
  const handleOpen = () => {
    setModal(true);
  };

  return { handleOpen };
};
