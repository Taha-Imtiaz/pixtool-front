import React from 'react'
import './Authentication.scss'
import SignInBG from '../../images/signIn.png';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignIn = () => {
    return (
        <div className="auth">
            <div className="auth__image-box">
                <img src={SignInBG} alt="" className="authBg" />
            </div>

            <div className="auth__main-box" >
                <SignInForm welcomeText="Welcome!" />
            </div>
        </div>
    )
}

export default SignIn
