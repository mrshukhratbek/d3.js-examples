// @react
import React from 'react';
// @uuid
import { v4 } from 'uuid';
// hooks
import { useValues } from '../../hooks';

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

    console.log(parentNode);
    console.log(newNode);
  };

  return {
    inputRef,
    selectRef,
    handleSubmit,
    nodeArr: innitialValue.nodeArr,
  };
};
