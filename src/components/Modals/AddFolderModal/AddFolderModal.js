import React, { useEffect } from 'react';
import './AddFolderModal.scss';

import ButtonLight from '../../Button/ButtonLight';

const AddFolderModal = ({ showModal, setShowModal, modalToggler }) => {
    const createNew = () => { }
    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showModal ? '1' : '',
        visibility: showModal ? 'visible' : '',
        overflow: showModal ? 'auto' : '',
        zIndex: showModal ? '2000' : '',
    };

    // Function to close the Modal whenever Backdrop clicked
    const closeModal = (event) => {
        const backDrop = document.querySelector(".backDrop2");
        const modal = document.querySelector(".modal");
        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShowModal(false);
        }
    }

    useEffect(() => {
        // Listener to close the Modal whenever Backdrop clicked
        const backDrop = document.querySelector(".backDrop2");
        backDrop.addEventListener('click', (e) => closeModal(e), false);

    }, []);

    return (
        <div className="modal__backDrop backDrop2" style={backDropStyle} >
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
