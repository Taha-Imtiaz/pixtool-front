import React, { useState } from 'react'
import { Fragment } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUser } from '../../Redux/user/userActions';
import ButtonLarge from "../../components/Button/ButtonLarge"

const SignInForm = ({ loginUser, history, setLoginModal, location: { pathname }, welcomeText }) => {

    const [authFormState, setAuthFormState] = useState({
        email: '',
        password: ''
    });

    // Function To Show/ Hide Password When Clicked On Eye Icons On Input Fields
    const showHidePassword = () => {
        // This can be done simply by toggling a state but here I don't want a redender

        let passwordInput = document.getElementById("password");
        let showPassEyeIcon = document.getElementById("showPassEyeIcon");
        let hidePassEyeIcon = document.getElementById("hidePassEyeIcon");

        if (passwordInput.type === 'password') {
            passwordInput.type = "text";

            showPassEyeIcon.style.display = 'none';
            hidePassEyeIcon.style.display = 'inline-block';

        } else {
            passwordInput.type = "password";
            showPassEyeIcon.style.display = 'inline-block';
            hidePassEyeIcon.style.display = 'none';
        }
    }

    // onChange handler for form fields
    const handleFormInput = (e) => {
        let { name, value } = e.target;
        setAuthFormState({
            ...authFormState,
            [name]: value
        })
    }

    //form submit handler 
    const handleFormSubmit = (e) => {
        // prevent page from reloading

        e.preventDefault();
        let { email, password } = authFormState
        let userObj = {
            email, password
        }
        loginUser(userObj, () => pathname === "/sign-in" ? history.push(`/home`) : history.push(pathname))
        if (setLoginModal) {
            setLoginModal(false)

        }

    }


    return (
        <Fragment>
            <div className="auth__main-box--head">
                <h1 className="heading-large">{welcomeText}</h1>
                <h2 className="heading-small">Sign In to Video Editing</h2>
            </div>

            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form__group">
                    <i className="fas fa-envelope form__absolute-icon"></i>
                    <input id="email" className="form__input" name="email" type="email" value={authFormState.email} onChange={handleFormInput} placeholder="Email" required></input>
                </div>

                <div className="form__group">
                    <i className="fas fa-lock form__absolute-icon"></i>
                    <input id="password" className="form__input" type="password" name="password" value={authFormState.password} onChange={handleFormInput} placeholder="Password" required></input>
                    <i id="showPassEyeIcon" className="fas fa-eye form__absolute-icon form__absolute-icon--eye" title="Show Password" onClick={showHidePassword}></i>
                    <i id="hidePassEyeIcon" className="fas fa-eye-slash form__absolute-icon form__absolute-icon--eye dis-none" title="Hide Password" onClick={showHidePassword}></i>
                </div>

                <div className="resetSignupTexts resetSignupTexts--login">
                    <span className="authLinks">Don't have an account?&nbsp;<Link to="/sign-up" className="authLinks"><strong>Sign Up</strong></Link></span>
                    <Link to="./#" className="authLinks authLinks--primary"><strong>Forgot Password</strong></Link>
                </div>

                <div className="form__group">
                    <ButtonLarge type="submit" text="Sign In" />
                </div>
            </form>

            <div className="otherAuthOptions">
                <p className="otherAuthOptions__text">Or Sign In with</p>
                <div>
                    <span className="otherAuthOptions__icons"><i className="fab fa-google"></i></span>
                    <span className="otherAuthOptions__icons"><i className="fab fa-apple"></i></span>
                </div>
            </div>
        </Fragment>

    )
}
var mapDispatchToProps = {
    loginUser,
}
export default connect(null, mapDispatchToProps)(withRouter(SignInForm))
