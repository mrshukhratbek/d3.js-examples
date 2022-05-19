// @react
import React from 'react';
// @uuid
import { v4 } from 'uuid';
// @hooks
import { useValues } from '../../hooks';
// @utils
import { addNodeWithParentId } from '../../utils';

export const useAddModalProps = () => {
  const inputRef = React.useRef();
  const selectRef = React.useRef();
  const [innitialValue] = useValues();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const parentNode = JSON.parse(selectRef.current.value);
    const newNode = {
      id: v4(),
      name: inputRef.current.value,
    };

    addNodeWithParentId(innitialValue.data, parentNode, newNode);
  };

  return {
    inputRef,
    selectRef,
    handleSubmit,
    nodeArr: innitialValue.nodeArr,
  };
};
