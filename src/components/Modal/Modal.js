import React from 'react';
import './Modal.scss';

const Modal = ({ show, toggleModal }) => {

    const backDropStyle = {
        opacity: show ? '1' : '',
        visibility: show ? 'visible' : '',
        overflow: show ? 'auto' : '',
        zIndex: show ? '2000' : '',
    };

    return (
        <div className="modal__backDrop" style={backDropStyle} onClick={toggleModal}>
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__test"></div>
                </div>
            </div>

            {/* transform: show ? 'translate(30%, 50%)' : 'translateY(-30%, -100vh)', */}
            {/* <div className="modal-header">
                <p>Welcome To Our Site</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div>
            </div> */}
        </div>
    )
}

export default Modal