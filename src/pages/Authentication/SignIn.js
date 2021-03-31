import React, { useState } from 'react'
import './Authentication.scss'
import SignInBG from '../../images/signIn.png';
import { Link } from 'react-router-dom';
import ButtonLarge from '../../components/Button/ButtonLarge';
import { connect } from 'react-redux';
import { checkUserAuthentication, loginUser } from '../../Redux/user/userActions';

const SignIn = ({ loginUser, history }) => {

    // State To Store/ Set Values Of Form Fields
    const [authFormState, setAuthFormState] = useState({
        email: '',
        password: ''
    });

    /* const showHidePassword = () => {
        var input = document.getElementById("password");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type === 'password') {
            input.type = "text";
            x.style.display = 'none';
            y.style.display = 'inline-block';
        }
        else {
            input.type = "password";
            x.style.display = 'inline-block';
            y.style.display = 'none';
        }

    } */

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
        loginUser(userObj, () => history.push(`/home`))

    }
    return (
        <div className="auth">
            <div className="auth__image-box">
                <img src={SignInBG} alt="" className="authBg" />
            </div>

            <div className="auth__main-box">
                <div className="auth__main-box--head">
                    <h1 className="heading-large">Welcome!</h1>
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
            </div>
        </div>
    )
}
var mapDispatchToProps = {
    loginUser,
}
export default connect(null, mapDispatchToProps)(SignIn)
