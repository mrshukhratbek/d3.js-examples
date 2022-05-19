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

  const handleZoomIn = () => {
    if (configTree.zoom > 0.2) {
      setConfigTree({
        ...configTree,
        zoom: configTree.zoom - 0.1,
      });
    }
  };

  const handleZoomOut = () => {
    if (configTree.zoom < 1.5) {
      setConfigTree({
        ...configTree,
        zoom: configTree.zoom + 0.1,
      });
    }
  };

  return {
    open,
    configTree,
    handleOpen,
    handleChangeOrientation,
    handleZoomIn,
    handleZoomOut,
  };
};
