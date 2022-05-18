import React from 'react';

export const useAddModalProps = () => {
  const inputRef = React.useRef();

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
  };
};
