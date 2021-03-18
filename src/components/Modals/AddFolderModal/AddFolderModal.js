import React from 'react';
import './AddFolderModal.scss';

import ButtonLight from '../../Button/ButtonLight';

const AddFolderModal = ({showModal, modalToggler}) => {
    const createNew = () => {}
    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showModal ? '1' : '',
        visibility: showModal ? 'visible' : '',
        overflow: showModal ? 'auto' : '',
        zIndex: showModal ? '2000' : '',
    };

    return (
        <div className="modal__backDrop" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="addFolderModal">
                        <div className="addFolderModal__header">
                            <span className="addFolderModal__heading">Add New Folder</span>
                            <span className="addFolderModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="addFolderModal__body">
                            <div>
                                <input type="text" name="projectName" className="addFolderModal__input addFolderModal__input--name" placeholder="Enter Folder Name" />
                            </div>
                        </div>
                        <div className="addFolderModal__footer">
                            <ButtonLight text="Create Folder" click={createNew} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFolderModal
