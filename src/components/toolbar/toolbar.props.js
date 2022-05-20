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

  const handleSelected = (node) => {
    const allNodes = document.querySelectorAll('.tree-node');
    const treeContainer = document.querySelector('.tree-container');
    const { width, height } = treeContainer.getBoundingClientRect();
    // allNodes.forEach((elem) => {
    //   if (elem.querySelector('.node-name').textContent === node.name) {
    //     setConfigTree({
    //       ...configTree,
    //       dimensions: { width: 198, height: 87 },
    //     });
    //     // elem.click();
    //     console.log(configTree);
    //     console.log(elem.clientWidth, elem);
    //     console.log(elem.clientHeight);
    //   }
    // });
    setConfigTree({
      ...configTree,
      dimensions: { width, height },
    });
    console.log(width, height);
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
