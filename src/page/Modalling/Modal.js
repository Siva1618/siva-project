import React from "react";
import "./Modal.css";
const Modal = (props) => {
  if (props.show === false) {
    return null;
  }
  return (
    <>
      <div
        className="modal"
        onClick={(event) => {
          props.onClose();
        }}
      ></div>
      <div className="modal-content "  onCick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title"></h4>
        </div>
        <div className="modal-body">My name is siva</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
