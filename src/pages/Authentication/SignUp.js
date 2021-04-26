import React, { useState } from 'react'
import './Authentication.scss'
import SignUpBG from '../../images/signUp.png'
import ButtonLarge from '../../components/Button/ButtonLarge';
import { connect } from 'react-redux';
import { signupUser } from '../../Redux/user/userActions';


const SignUp = ({ signupUser,history }) => {
    const [authFormState, setAuthFormState] = useState({
        full_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
    });

    // Function To Show/ Hide Password When Clicked On Eye Icons On Input Fields
    const showHidePassword = () => {
        // This can be done simply by toggling a state but here I don't want a redender

        let passwordInput = document.getElementById("password");
        let passwordInputC = document.getElementById("passwordConfirm");
        let showPassEyeIcon = document.getElementById("showPassEyeIcon");
        let hidePassEyeIcon = document.getElementById("hidePassEyeIcon");

        if (passwordInput.type === 'password' || passwordInputC.type === 'password') {
            passwordInput.type = "text";
            passwordInputC.type = "text";

            showPassEyeIcon.style.display = 'none';
            hidePassEyeIcon.style.display = 'inline-block';

        } else {
            passwordInput.type = "password";
            passwordInputC.type = "password";
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
        let { full_name, email, username, password, confirm_password } = authFormState
        
        if (password === confirm_password) {
            // send data to the server
            var userObj = {
                full_name, email, username, password,
            }
            signupUser(userObj, () => history.push(`/home`))
        }
        else {
            console.log("Password do not match!")
        }
    }

    return (
        <div className="auth">
            <div className="auth__image-box">
                <img src={SignUpBG} alt="" className="authBg" />
            </div>

            <div className="auth__main-box">
                <div className="auth__main-box--head">
                    <h1 className="heading-large">Welcome!</h1>
                    <h2 className="heading-small">Create an Account</h2>
                </div>

                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="form__group">
                        <i className="fas fa-user form__absolute-icon"></i>
                        <input id="fullName" className="form__input" type="text" name="full_name" value={authFormState.fullName} onChange={handleFormInput}  placeholder="Full Name" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-envelope form__absolute-icon"></i>
                        <input id="email" className="form__input" type="email" name="email" value={authFormState.email} onChange={handleFormInput} placeholder="Email" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-user form__absolute-icon"></i>
                        <input id="username" className="form__input" type="text" name="username" value={authFormState.name} onChange={handleFormInput} placeholder="Username" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-lock form__absolute-icon"></i>
                        <input id="password" className="form__input" type="password" name="password" value={authFormState.password} onChange={handleFormInput} placeholder="Password" required></input>
                        <i id="showPassEyeIcon" className="fas fa-eye form__absolute-icon form__absolute-icon--eye" title="Show Password" onClick={showHidePassword}></i>
                        <i id="hidePassEyeIcon" className="fas fa-eye-slash form__absolute-icon form__absolute-icon--eye dis-none" title="Hide Password" onClick={showHidePassword}></i>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-lock form__absolute-icon"></i>
                        <input id="passwordConfirm" className="form__input" type="password" name="confirm_password" value={authFormState.confirmPassword} onChange={handleFormInput} placeholder="Confirm Password" required></input>
                    </div>

                    <div className="resetSignupTexts">
                        <input type="checkbox" className="checkbox"></input>
                        <span className="authLinks">
                            &nbsp; I, agree with all the
                            <a href="./#" className="authLinks authLinks--blue">
                                <strong>&nbsp;Terms & Conditions</strong>
                            </a>
                        </span>
                    </div>

                    <div className="form__group">
                        <ButtonLarge type="submit" text="Sign Up" />
                    </div>
                </form>

                <div className="otherAuthOptions">
                    <p className="otherAuthOptions__text">Or Sign Up with</p>
                    <div>
                        <span className="otherAuthOptions__icons"><i className="fab fa-google"></i></span>
                        <span className="otherAuthOptions__icons"><i className="fab fa-apple"></i></span>
                    </div>
                </div>
            </div >
        </div >
    )
}
var mapDispatchToProps = {
    signupUser
}
export default connect(null, mapDispatchToProps)(SignUp)
