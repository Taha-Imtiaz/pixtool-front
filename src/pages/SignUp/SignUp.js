import React from 'react'
import './SignUp.scss'
import SignUpBG from '../../images/signUp.png'

const SignUp = () => {

    const showPassword = () => {
        var input = document.getElementById("password");
        var inputC = document.getElementById("passwordConfirm");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type == 'password' || inputC.type == 'password'){
            input.type = "text";
            inputC.type = "text";
            x.style.display = 'none';
            y.style.display = 'inline-block';
        }
        
    }

    const hidePassword = () => {
        var input = document.getElementById("password");
        var inputC = document.getElementById("passwordConfirm");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type == 'text' || inputC.type == 'text'){
            input.type = "password";
            inputC.type = "password";
            x.style.display = 'inline-block';
            y.style.display = 'none';
        }
    }

    return (
        <div className="signIn">
            <div className="signIn__image-box">
                <img src={SignUpBG} alt="" className="authBg" />
            </div>

            <div className="signIn__main-box">
                <div className="signIn__main-box--head">
                    <h1 className="heading-large">Welcome!</h1>
                    <h2 className="heading-small">Create an Account</h2>
                </div>

                <form className="form">
                    <div className="form__group">
                        <i class="fas fa-user form__absolute-icon"></i>
                        <input type="email" className="form__input" placeholder="Email" id="email" required></input>
                    </div>

                    <div className="form__group">
                        <i class="fas fa-user form__absolute-icon"></i>
                        <input type="text" className="form__input" placeholder="Username" id="username" required></input>
                    </div>

                    <div className="form__group">
                        <i class="fas fa-lock form__absolute-icon"></i>
                        <input id="password" type="password" className="form__input" placeholder="Password" required></input>
                        <i id="showPass" class="fas fa-eye form__absolute-icon form__absolute-icon--eye" title="Show Password" onClick={showPassword}></i>
                        <i id="hidePass" class="fas fa-eye-slash form__absolute-icon form__absolute-icon--eye dis-none" title="Hide Password" onClick={hidePassword}></i>
                    </div>

                    <div className="form__group">
                        <i class="fas fa-lock form__absolute-icon"></i>
                        <input id="passwordConfirm" type="password" className="form__input" placeholder="Confirm Password" required></input>
                    </div>

                    <div className="resetSignupTexts margin-r-huge">
                        <input type="checkbox"></input>
                        <span className="authLinks">
                            &nbsp; I, agree with all the
                            <a href="" className="authLinks authLinks--blue">
                                <strong>&nbsp;Terms & Conditions</strong>
                            </a>
                        </span>
                    </div>

                    <div class="form__group">
                        <button class="btn btn--large">Sign Up</button>
                    </div>
                </form>

                {/* <div className="otherAuthOptions">
                    <p className="otherAuthOptions__text">Or Sign In with</p>
                    <div>
                        <span className="otherAuthOptions__icons"><i class="fab fa-google"></i></span>
                        <span className="otherAuthOptions__icons"><i class="fab fa-apple"></i></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SignUp
