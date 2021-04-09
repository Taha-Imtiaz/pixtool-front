import { React, useEffect} from 'react';

import './ShareModal.scss';

import ButtonLight from '../../Button/ButtonLight';
import Dropdown from '../../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { ToastContainer, toast } from "react-toastify";

const ShareModal = ({ showModal, setShowModal, modalToggler, sharelink }) => {
   


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
        if (sharelink) {
            // Listener to close the Modal whenever Backdrop clicked
            const backDrop = document.querySelector(".backDrop3");
            backDrop.addEventListener('click', (e) => closeModal(e), false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sharelink]);



    const copyToClipboard = () => {
  
    var textField = document.querySelector(".shareModal__shareLink")
   
    textField.select()

    // copy url of textField
    document.execCommand('copy')
    textField.focus();
    toast.dark('Copied to ClipBoard')
    };

    // Dropdown Option Values
    let shareLinkPrivacy = [
        { rightIcon: '', leftIcon: <i className="fas fa-globe-europe"></i>, value: sharelink && sharelink.privacy, goToMenu: '' },
        { rightIcon: '', leftIcon: <i className="fas fa-times"></i>, value: sharelink && sharelink.privacy === "public" ? "Private" : "Public", goToMenu: '' }];



    return (
        <Fragment>
             <ToastContainer/>
            { sharelink && <div className="modal__backDrop backDrop3" style={backDropStyle} >
              
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
                                <div className="shareModal__text shareModal__text--dark">
                                    {sharelink && sharelink.assets.map((asset) => asset.name).join(' , ')}

                                </div>
                                <div className="shareModal__linkBox">
                                    <div className="shareModal__text">Link Access</div>
                                    <div className="shareModal__linkWrapper" >
                                        {/* <a href="./#" className="shareModal__shareLink" style = {{background:"red"}}> */}{/* </a> */}
                                         <input type = "text" className="shareModal__shareLink" value = {sharelink.short_url}/>
                                            
                                        <div className="shareModal__copyIcon">

                                            <i className="far fa-copy"  onClick={copyToClipboard} ></i>

                                        </div>
                                        
                                        <div className="shareModal__linkDropdown">
                                            <Dropdown text={sharelink.privacy} menuItems={shareLinkPrivacy} />
                                        </div>
                                    </div>


                                    <div   >
                   

                                        {/* check if copy command supported */}
                                        {/* {document.queryCommandSupported('copy') && 
                                        <ToastContainer ref={textAreaRef} 
                                            >

                                        </ToastContainer>} */}





                                    </div>
                                </div>


                            </div>
                            <div className="shareModal__footer">
                                <ButtonLight text="Share" click={clickMe} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </Fragment>
    )
}
var mapStateToProps = (state) => ({
    sharelink: state.assets && state.assets.shareablelink
})

export default connect(mapStateToProps)(ShareModal)
