// @react
import React from 'react';
// @hooks
import { useToolbar, useConfigTree, useValues } from '../../hooks';
// @utils
import { collapseParentNode } from '../../utils';

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

  const handleChangeLine = (evt) => {
    setConfigTree({
      ...configTree,
      pathFunc: evt.target.value,
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

  const handleSelected = async (node) => {
    setConfigTree({
      ...configTree,
      initialDepth: undefined,
    });

    const result = collapseParentNode(
      innitialValue.data,
      node,
      innitialValue.nodeArr
    );

    innitialValue.setData({ ...result });

    const allNodes = document.querySelectorAll('.tree-node');

    allNodes.forEach((elem) => {
      if (elem.querySelector('.node-name').textContent === node.name) {
        elem.classList.add('search');
        elem.querySelector('.collapse-btn') &&
          elem.querySelector('.collapse-btn').click();
      } else {
        elem.classList.remove('search');
      }
    });
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
    handleChangeLine,
  };
};
