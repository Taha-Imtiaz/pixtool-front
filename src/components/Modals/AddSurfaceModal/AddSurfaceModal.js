import React, { useState } from "react";
import ButtonLight from "../../Button/ButtonLight";
import DropDownSelect from "../../DropdownSelect/DropDownSelect";
import "./AddSurfaceModal.scss";

const AddSurfaceModal = ({ showModal, modalToggler }) => {
  const backDropStyle = {
    opacity: showModal ? "1" : "",
    visibility: showModal ? "visible" : "",
    overflow: showModal ? "auto" : "",
    zIndex: showModal ? "2000" : "",
  };

  return (
    <div className="modal__backDrop backDrop2" style={backDropStyle}>
      <div className="modal">
        <div className="modal__content">
          <div className="addTeamModal">
            <div className="addTeamModal__header">
              <span className="addTeamModal__heading">Add New Surface</span>
              <span className="addTeamModal__closeBtn" onClick={modalToggler}>
                <i className="fas fa-times"></i>
              </span>
            </div>

            <DropDownSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSurfaceModal;
