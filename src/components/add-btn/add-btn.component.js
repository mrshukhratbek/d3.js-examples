import './add-btn.css';
import React from 'react';
import { hoc } from '../../utils';
import { useAddBtnProps } from './add-btn.props';

export const AddBtn = hoc(useAddBtnProps, ({ handleOpen }) => {
  return (
    <button className="add-btn" onClick={handleOpen}>
      +
    </button>
  );
});
