import React from 'react'
import './SignUp.scss'
import SignUpBG from '../../images/signUp.png'

const SignUp = () => {
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
                        <input type="email" className="form__input" placeholder="Email" id="email" required></input>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Username" id="username" required></input>
                    </div>

                    <div className="form__group">
                        <input type="password" className="form__input" placeholder="Password" id="password" required></input>
                    </div>

                    <div className="form__group">
                        <input type="password" className="form__input" placeholder="Confirm Password" id="password" required></input>
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
