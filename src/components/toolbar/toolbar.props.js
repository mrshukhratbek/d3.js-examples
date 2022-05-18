import { useToolbar } from "../../hooks";

export const useToolbarProps = () => {
  const [open, setOpen] = useToolbar();

  const handleOpen = () => {
    setOpen(!open);
  };

  return {
    handleOpen,
    open,
  };
};
