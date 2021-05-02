import React, { useEffect, useState } from 'react';
import './AddFolderModal.scss';

import ButtonLight from '../../Button/ButtonLight';
import { connect } from 'react-redux';
import { uploadAsset } from '../../../Redux/assets/assetActions';
import { withRouter } from 'react-router';


const AddFolderModal = ({ showModal, setShowModal, modalToggler, uploadAsset, location:{pathname} }) => {


    const [modalFormFields, setModalFormFields] = useState({
        projectName: '',
        projectDescription: ""
    });

    // Modal Back-drop Styling
    let pathNameArray = pathname.split('/')
    let pathNameLastIndex = pathNameArray[pathNameArray.length -1 ]
    const backDropStyle = {
        opacity: showModal ? '1' : '',
        visibility: showModal ? 'visible' : '',
        overflow: showModal ? 'auto' : '',
        zIndex: showModal ? '2000' : '',
    };

    // Function to close the Modal whenever Backdrop clicked
    const closeModal = (event) => {
        const backDrop = document.querySelector(".backDrop1");
        const modal = document.querySelector(".modal");
        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShowModal(false);
        }
    }

    useEffect(() => {
        // Listener to close the Modal whenever Backdrop clicked
        const backDrop = document.querySelector(".backDrop1");
        backDrop.addEventListener('click', (e) => closeModal(e), false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleModalForm = (e) => {
        let { name, value } = e.target
        setModalFormFields({
            ...modalFormFields,
            [name]: value
        })

    }
    const handleAddFolder = () => {

        const data = new FormData()
        data.append('data', JSON.stringify({
            parent_id: pathNameLastIndex,
            name: modalFormFields.projectName,
            description: modalFormFields.projectDescription,
        }))

        uploadAsset(data)
        // close modal
        setModalFormFields({
            projectName: '',
            projectDescription: ""
        })
        modalToggler()
    }
    return (
        <div className="modal__backDrop backDrop1" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="addFolderModal">
                        <div
                         className="addFolderModal__header"
                         >
                            <span className="addFolderModal__heading">Add New Folder</span>
                            <span className="addFolderModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="addFolderModal__body">
                            <div>
                                <input type="text" name="projectName" value={modalFormFields.projectName} onChange={handleModalForm} className="addFolderModal__input addFolderModal__input--name" placeholder="Enter Folder Name" />
                                <textarea name="projectDescription" value={modalFormFields.projectDescription} onChange={handleModalForm}
                                    rows={5}
                                    cols={5}
                                    className="addFolderModal__input addFolderModal__input--name">

                                </textarea>
                            </div>
                        </div>
                        <div className="addFolderModal__footer">
                            <ButtonLight text="Create Folder" click={handleAddFolder} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

var mapDispatchToProps = {
    uploadAsset
}
export default connect(null, mapDispatchToProps)(withRouter(AddFolderModal))
