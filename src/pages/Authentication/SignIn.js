import React from 'react'
import './Authentication.scss'
import SignInBG from '../../images/signIn.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ButtonLarge from '../../components/Button/ButtonLarge';

const SignIn = () => {
    const history = useHistory();

    const createNew = () => {
        history.push('/home')
    }

    const showPassword = () => {
        var input = document.getElementById("password");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type === 'password') {
            input.type = "text";
            x.style.display = 'none';
            y.style.display = 'inline-block';
        }

    }

    const hidePassword = () => {
        var input = document.getElementById("password");
        var x = document.getElementById("showPass");
        var y = document.getElementById("hidePass");

        if (input.type === 'text') {
            input.type = "password";
            x.style.display = 'inline-block';
            y.style.display = 'none';
        }
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

                <form className="form">
                    <div className="form__group">
                        <i className="fas fa-user form__absolute-icon"></i>
                        <input type="email" className="form__input" placeholder="Email" id="email" required></input>
                    </div>

                    <div className="form__group">
                        <i className="fas fa-lock form__absolute-icon"></i>
                        <input id="password" type="password" className="form__input" placeholder="Password" required></input>
                        <i id="showPass" className="fas fa-eye form__absolute-icon form__absolute-icon--eye" title="Show Password" onClick={showPassword}></i>
                        <i id="hidePass" className="fas fa-eye-slash form__absolute-icon form__absolute-icon--eye dis-none" title="Hide Password" onClick={hidePassword}></i>
                    </div>

                    <div className="resetSignupTexts">
                        <span className="authLinks">Don't have an account?&nbsp;<Link to="/sign-up" className="authLinks"><strong>Sign Up</strong></Link></span>
                        <a href="./#" className="authLinks authLinks--primary margin-l-large"><strong>Forgot Passsword</strong></a>
                    </div>

                    <div className="form__group">
                        {/* <button class="btn btn--large btn--primary" onClick={() => history.push('/home')}>Sign In</button> */}
                        <ButtonLarge text="Sign In" click={createNew} />
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

export default SignIn
