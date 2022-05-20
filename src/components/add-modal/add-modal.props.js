// @react
import React from 'react';
// @uuid
import { v4 } from 'uuid';
// @hooks
import { useValues } from '../../hooks';
// @utils
import { addNodeWithParentId } from '../../utils';

export const useAddModalProps = ({ setOpen }) => {
  const inputRef = React.useRef();
  const selectRef = React.useRef();
  const [innitialValue] = useValues();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const parentNode = JSON.parse(selectRef.current.value);
    const newNode = {
      id: v4(),
      name: inputRef.current.value,
      isOpen: false,
      type: 'none',
    };

    const result = addNodeWithParentId(innitialValue.data, parentNode, newNode);

    innitialValue.setData({ ...result });

    inputRef.current.value = null;
    setOpen(false);
  };

  return {
    inputRef,
    selectRef,
    handleSubmit,
    nodeArr: innitialValue.nodeArr,
  };
};
