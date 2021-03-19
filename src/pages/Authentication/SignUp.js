import React, { useEffect, useState } from 'react'
import './Authentication.scss'
import SignUpBG from '../../images/signUp.png'
import ButtonLarge from '../../components/Button/ButtonLarge';
import { connect } from 'react-redux';
import { checkUserAuthentication, signupUser } from '../../Redux/user/userActions';


const SignUp = ({ signupUser, history }) => {
    const [authFormState, setAuthFormState] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    })
    useEffect(() => {
        let checkUserAuth = checkUserAuthentication()
       if(checkUserAuth) {
           console.log(checkUserAuth)
          history.push("/")
       }
       else {
          history.push("/sign-up")
       }
        },[])
    // const createNew = () => {
    //     history.push('/home') 
    // }

    const showHidePassword = () => {
        var input = document.getElementById("password");
        var inputC = document.getElementById("passwordConfirm");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type === 'password' || inputC.type === 'password') {
            input.type = "text";
            inputC.type = "text";

            x.style.display = 'none';
            y.style.display = 'inline-block';
        }
        else {
            input.type = "password";
            inputC.type = "password";
            x.style.display = 'inline-block';
            y.style.display = 'none';
        }

    }

    // const hidePassword = () => {
    //     var input = document.getElementById("password");
    //     var inputC = document.getElementById("passwordConfirm");
    //     var x = document.getElementById("showPass");
    //     var y = document.getElementById("hidePass");

    //     if (input.type === 'text' || inputC.type === 'text') {
    //         input.type = "password";
    //         inputC.type = "password";
    //         x.style.display = 'inline-block';
    //         y.style.display = 'none';
    //     }
    // }
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
        let { name, email, password, confirmPassword } = authFormState
        if (password === confirmPassword) {
            // send data to the server
            var userObj = {

                name, email, password,

            }
            signupUser(userObj, () => {
                history.push(`/home`)
            })
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
                        <input type="email" name="email" value={authFormState.email} onChange={handleFormInput} className="form__input" placeholder="Email" id="email" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-user form__absolute-icon"></i>
                        <input type="text" name="name" value={authFormState.name} onChange={handleFormInput} className="form__input" placeholder="Username" id="username" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-lock form__absolute-icon"></i>
                        <input id="password" name="password" value={authFormState.password} onChange={handleFormInput} type="password" className="form__input" placeholder="Password" required></input>
                        <i id="showPass" className="fas fa-eye form__absolute-icon form__absolute-icon--eye" title="Show Password" onClick={showHidePassword}></i>
                        <i id="hidePass" className="fas fa-eye-slash form__absolute-icon form__absolute-icon--eye dis-none" title="Hide Password" onClick={showHidePassword}></i>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-lock form__absolute-icon"></i>
                        <input id="passwordConfirm" name="confirmPassword" value={authFormState.confirmPassword} onChange={handleFormInput} type="password" className="form__input" placeholder="Confirm Password" required></input>
                    </div>

                    <div className="resetSignupTexts margin-r-huge">
                        <input type="checkbox"></input>
                        <span className="authLinks">
                            &nbsp; I, agree with all the
                            <a href="./#" className="authLinks authLinks--blue">
                                <strong>&nbsp;Terms & Conditions</strong>
                            </a>
                        </span>
                    </div>

                    <div className="form__group">
                        {/* <button className="btn btn--large btn--blue" onClick={() => history.push('/home')}>Sign Up</button> */}
                        <ButtonLarge type="submit" text="Sign Up" />
                    </div>
                </form>

                {/* <div className="otherAuthOptions">
                    <p className="otherAuthOptions__text">Or Sign In with</p>
                    <div>
                        <span className="otherAuthOptions__icons"><i className="fab fa-google"></i></span>
                        <span className="otherAuthOptions__icons"><i className="fab fa-apple"></i></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
var mapDispatchToProps = {
    signupUser
}
export default connect(null, mapDispatchToProps)(SignUp)
