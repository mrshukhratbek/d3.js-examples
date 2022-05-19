// @react
import React from 'react';
// @hooks
import { useToolbar, useConfigTree, useValues } from '../../hooks';

export const useToolbarProps = () => {
  const [innitialValue] = useValues();
  const [configTree, setConfigTree] = useConfigTree();
  const [open, setOpen] = useToolbar();

  const [search, setSearch] = React.useState([]);

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

  const handleSearch = (evt) => {
    const newRegExp = new RegExp(evt.target.value, 'gi');

    if (!evt.target.value.length) {
      return setSearch([]);
    }

    const filtredArr = innitialValue.nodeArr.filter((node) =>
      node.name.match(newRegExp)
    );

    setSearch(filtredArr);
  };

  const handleSelected = () => {
    console.log('selected');
  };

  return {
    open,
    search,
    configTree,
    handleOpen,
    handleChangeOrientation,
    handleZoomIn,
    handleZoomOut,
    handleSearch,
    handleSelected,
  };
};
