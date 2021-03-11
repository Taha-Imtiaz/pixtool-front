import React from 'react';
import './Modal.scss';

const Modal = ({ show, close }) => {
    
    return (
        <div className="modal__backDrop"
            style={{
                /* transform: show ? 'translate(30%, 50%)' : 'translateY(-30%, -100vh)', */
                opacity: show ? '1' : '0',
                zIndex: show ? '1000' : '-1',
                overflow: show ? 'auto' : 'hidden',
            }}
        >
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