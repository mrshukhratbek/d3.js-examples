// @react
// @styles
import "./modal.css";
// @react
import React from "react";
// utils
import { hoc } from "../../utils";
// @hook
import { useModalProps } from "./modal.props";

export const Modal = hoc(
  useModalProps,
  ({ children, open, handleClose, title = "Modal", elModal }) => {
    return (
      <div ref={elModal} className={`modal-wrapper ${open && "modal-open"}`}>
        <div className="modal">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button onClick={handleClose}>&times;</button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
);
