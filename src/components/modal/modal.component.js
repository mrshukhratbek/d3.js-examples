// @react
// @styles
import "./modal.css";
// @react
import React from "react";
// utils
import { hoc } from "../../utils";
// @hook
import { useModalProps } from "./modal.props";

export const Modal = hoc(useModalProps, ({ children, open, handleClose }) => {
  return (
    <div className={`modal ${open && "modal-open"}`}>
      <div className="modal-header">
        <h5 className="modal-title">Title</h5>
        <button onClick={handleClose}>&times;</button>
      </div>
      <div>{children}</div>
    </div>
  );
});
