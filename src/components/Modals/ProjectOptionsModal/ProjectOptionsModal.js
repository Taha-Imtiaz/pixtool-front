import React, {useEffect} from 'react';

import './ProjectOptionsModal.scss'

function ProjectOptionsModal({showModal, setShowModal, modalToggler}) {

    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: showModal ? '1' : '',
        visibility: showModal ? 'visible' : '',
        overflow: showModal ? 'auto' : '',
        zIndex: showModal ? '2000' : '',
    };

    // Function to close the Modal whenever Backdrop clicked
    const closeModal = (event) => {
        const backDrop = document.querySelector(".backDrop5");
        const modal = document.querySelector(".modal");

        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShowModal(false);
        }
    }

    // Listener to close the Modal whenever Backdrop clicked
    useEffect(() => {
        // Listener to close the Modal whenever Backdrop clicked
        const backDrop = document.querySelector(".backDrop5");
        backDrop.addEventListener('click', (e) => closeModal(e), false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="modal__backDrop backDrop5" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="projectOptionsModal">
                        <div className="projectOptionsModal__header">
                            <span className="projectOptionsModal__heading">Project Menu</span>
                            <span className="projectOptionsModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="projectOptionsModal__body">
                            <p className="projectOptionsModal__text">
                                I am a blank Modal
                            </p>
                        </div>
                        {/* <div className="projectOptionsModal__footer">
                            <ButtonLight text="Cancel" click={modalToggler} />
                            <ButtonLight text="Confirm" click={onConfirm} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOptionsModal
