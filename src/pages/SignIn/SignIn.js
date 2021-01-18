import React from 'react'
import './SignIn.scss'
import SignInBG from '../../images/signIn.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="signIn">
            <div className="signIn__image-box">
                <img src={SignInBG} alt="" className="authBg" />
            </div>

            <div className="signIn__main-box">
                <div className="signIn__main-box--head">
                    <h1 className="heading-large">Welcome!</h1>
                    <h2 className="heading-small">Sign In to Video Editing</h2>
                </div>

                <form className="form">
                    <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email" id="email" required></input>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Password" id="password" required></input>
                    </div>

                    <div className="resetSignupTexts">
                        <span className="authLinks">Don't have an account?&nbsp;<Link to="/sign-up" className="authLinks"><strong>Sign Up</strong></Link></span>
                        <a href="" className="authLinks authLinks--blue margin-l-large"><strong>Forgot Passsword</strong></a>
                    </div>

                    <div class="form__group">
                        <button class="btn btn--large">Sign In</button>
                    </div>
                </form>

                <div className="otherAuthOptions">
                    <p className="otherAuthOptions__text">Or Sign In with</p>
                    <div>
                        <span className="otherAuthOptions__icons"><i class="fab fa-google"></i></span>
                        <span className="otherAuthOptions__icons"><i class="fab fa-apple"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
