import { Backdrop, Fade, Modal } from '@material-ui/core'
import React from 'react'
import SignInForm from '../../SignInForm/SignInForm'

const SignInModal = ({loginModal, setLoginModal}) => {
    return (
        <Modal
            className="modal"
            // className={classes.modal}
            open={loginModal}
            onClose={() => setLoginModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={loginModal}>
                <div className="loginModal">
                    <SignInForm
                        setLoginModal={setLoginModal}
                        welcomeText="Please Login to Continue" />
                </div>

            </Fade>
        </Modal>
    )
}

export default SignInModal
