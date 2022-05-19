// @react
import React from 'react';
// hooks
import { useValues } from '../../hooks';

export const useAddModalProps = () => {
  const inputRef = React.useRef();
  const [innitialValue] = useValues();

  const handleChange = (evt) => {
    console.log(evt);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(inputRef.current.value);
  };

  return {
    inputRef,
    handleChange,
    handleSubmit,
    nodeArr: innitialValue.nodeArr,
  };
};
