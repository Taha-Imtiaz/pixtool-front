import React, { useEffect, useState } from 'react';

import './ConfirmationModal.scss';

import ButtonLight from '../../Button/ButtonLight';

function ConfirmationModal({ show, setShow, confirmFunc }) {

    // Modal Back-drop Styling
    const backDropStyle = {
        opacity: show ? '1' : '',
        visibility: show ? 'visible' : '',
        overflow: show ? 'auto' : '',
        zIndex: show ? '2000' : '',
    };

    // Function to close the Modal whenever Backdrop clicked
    const closeModal = (event) => {
        const backDrop = document.querySelector(".backDrop3");
        const modal = document.querySelector(".modal");

        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShow(false);
        }
    }

    // Listener to close the Modal whenever Backdrop clicked
    useEffect(() => {
        // Listener to close the Modal whenever Backdrop clicked
        const backDrop = document.querySelector(".backDrop3");
        backDrop.addEventListener('click', (e) => closeModal(e), false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // This Function is responsible to Show/ Hide the ShareModal
    const modalToggler = () => {

        if (show) {
            // Allow to scroll when closing the modal
            document.body.style.removeProperty('overflow');

        } else {
            // Disable scrolling on the `body` element when opening a modal
            document.body.style.overflow = 'hidden';
        }

        setShow(false);
    };

    // This Function Runs At Confirm
    const onConfirm  = () => {
        confirmFunc();
        setShow(false);
    }

    
    return (
        <div className="modal__backDrop backDrop3" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="confirmationModal">
                        <div className="confirmationModal__header">
                            <span className="confirmationModal__heading">Confirmation</span>
                            <span className="confirmationModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="confirmationModal__body">
                            <p className="confirmationModal__text">
                                Are you sure you want to delete this file?
                            </p>
                        </div>
                        <div className="confirmationModal__footer">
                            <ButtonLight text="Cancel" click={modalToggler} />
                            <ButtonLight text="Confirm" click={onConfirm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
