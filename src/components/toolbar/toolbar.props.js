// @hooks
import { useToolbar, useConfigTree } from '../../hooks';

export const useToolbarProps = () => {
  const [configTree, setConfigTree] = useConfigTree();
  const [open, setOpen] = useToolbar();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangeOrientation = (evt) => {
    setConfigTree({
      ...configTree,
      orientation: evt.target.value,
    });
  };

  return {
    open,
    handleOpen,
    handleChangeOrientation,
    configTree,
  };
};
