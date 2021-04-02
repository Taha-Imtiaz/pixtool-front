import { React, useEffect } from 'react';

import './ShareModal.scss';

import ButtonLight from '../../Button/ButtonLight';
import Dropdown from '../../Dropdown/Dropdown';

const ShareModal = ({ showModal, setShowModal, modalToggler }) => {

    const clickMe = () => { }

    // Modal Back-drop Styling
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
        const backDrop = document.querySelector(".backDrop3");
        backDrop.addEventListener('click', (e) => closeModal(e), false);

    }, []);

    // Dropdown Option Values
    let shareLinkPrivacy = [
        { rightIcon: '', leftIcon: <i class="fas fa-globe-europe"></i>, value: 'Public', goToMenu: '' },
        { rightIcon: '', leftIcon: <i class="fas fa-times"></i>, value: 'Disabled', goToMenu: '' }];

    return (
        <div className="modal__backDrop backDrop3" style={backDropStyle} >
            <div className="modal">
                <div className="modal__content">
                    <div className="shareModal">
                        <div className="shareModal__header">
                            <span className="shareModal__heading">Share</span>
                            <span className="shareModal__closeBtn" onClick={modalToggler}>
                                <i className="fas fa-times"></i>
                            </span>
                        </div>
                        <div className="shareModal__body">
                            <div className="shareModal__text shareModal__text--dark">Sample_Video.mp4</div>
                            <div className="shareModal__linkBox">
                                <div className="shareModal__text">Link Access</div>
                                <div className="shareModal__linkWrapper">
                                    <a href="./#" className="shareModal__shareLink">f.io/mTbdxMiL</a>
                                    <div className="shareModal__copyIcon">
                                        <i class="far fa-copy"></i>
                                    </div>
                                    <div className="shareModal__linkDropdown">
                                        <Dropdown text="Privacy" menuItems={shareLinkPrivacy} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shareModal__footer">
                            <ButtonLight text="Share" click={clickMe} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareModal
