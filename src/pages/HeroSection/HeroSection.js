import React, { useEffect } from 'react'
import './HeroSection.scss'
import billboardBG from '../../images/billboardBG-trans.png';
import Logo from '../../images/logo.png';
import OnePlatform from '../../images/one-platform-for-all.jpg';
import MoreGraphics from '../../images/more-graphics.jpg';
import ButtonPoppins from "../../components/Button/ButtonPoppins";
import FeaturesCard from '../../components/Cards/FeaturesCard/FeaturesCard';
import { Link } from 'react-router-dom';
import { checkUserAuthentication } from '../../Redux/user/userActions';

function HeroSection({history}) {
    useEffect(() => {
        let checkUserAuth = checkUserAuthentication()
       if(checkUserAuth) {
           console.log(checkUserAuth)
          history.push("/home")
       }
       else {
          history.push("/sign-in")
       }
        },[])

    const createNew = () => { }

    // Below Code Changes The Header Bg Color On Page Scroll
    document.addEventListener('scroll', function () {
        let header = document.getElementById("heroHeader");

        if (header) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                header.style.backgroundColor = "#121212";
            } else {
                header.style.backgroundColor = "#292929";
            }
        }
    });

    return (
        <div className="heroSec">
            <div className="heroSec__header" id="heroHeader">
                <div className="heroSec__logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

                <div className="heroSec__nav">
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__links"><a href="./#" className="navigation__link">Home</a></li>
                            <li className="navigation__links"><a href="./#" className="navigation__link">Partners</a></li>
                            <li className="navigation__links"><a href="./#" className="navigation__link">Services</a></li>
                            <li className="navigation__links"><a href="./#" className="navigation__link">About us</a></li>
                            <li className="navigation__links">
                                {/* <a href="" className="navigation__link navigation__link--primary">Login</a> */}
                                <Link to="/sign-in" className="navigation__link navigation__link--primary">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="heroSec__billBoard">
                <div className="billBoard">
                    <div className="billBoard__left">
                        <span className="billBoard__text">
                            Best Video 3D <span className="billBoard__text--primary">Editing</span> Tool
                            <ButtonPoppins text="Explore" click={createNew} />
                        </span>
                    </div>
                    <div className="billBoard__right">
                        <img src={billboardBG} alt="An illustration showing video editing" className="billBoard__img" />
                    </div>
                </div>
            </div>

            <div className="heroSec__features">
                <div className="features">
                    <h2 className="features__heading">
                        Platform Features
                    </h2>

                    <div className="features__content">
                        <FeaturesCard />
                        <FeaturesCard />
                        <FeaturesCard />
                    </div>
                </div>
            </div>

            <div className="heroSec__stories">
                <div className="stories">
                    <h2 className="features__heading">One platform to manage them all</h2>
                    <div className="stories__content">
                        <img src={OnePlatform} alt="One of Pixtool's tab screenshot" className="stories__img stories__img--1" />
                        <p className="stories__text stories__text--1">As designers, we know inspiration can make the difference between success and failure. Switching programs, converting files, waiting on hardware - these tasks can get in the way of a great idea. With pixtool you have all the tools you need to design, adjust and manage every element -  LED surfaces to stage layouts, weekend events to world tours. Pixtool has you covered.</p>
                    </div>
                </div>
                <div className="stories">
                    <h2 className="features__heading">One platform to manage them all</h2>
                    <div className="stories__content">
                        <img src={MoreGraphics} alt="A girl's face" className="stories__img stories__img--2" />
                        <p className="stories__text stories__text--2">As designers, we know inspiration can make the difference between success and failure. Switching programs, converting files, waiting on hardware - these tasks can get in the way of a great idea. With pixtool you have all the tools you need to design, adjust and manage every element -  LED surfaces to stage layouts, weekend events to world tours. Pixtool has you covered.</p>
                    </div>
                </div>
            </div>

            <div className="heroSec__footer">
                <div className="footer">
                    <div className="footer__social">
                        <span className="footer__social--icons"><a href="./#" className="footer__social--links"><i className="fab fa-facebook-f"></i></a></span>
                        <span className="footer__social--icons"><a href="./#" className="footer__social--links"><i className="fab fa-twitter"></i></a></span>
                        <span className="footer__social--icons"><a href="./#" className="footer__social--links"><i className="fab fa-whatsapp"></i></a></span>
                        <span className="footer__social--icons"><a href="./#" className="footer__social--links"><i className="fab fa-instagram"></i></a></span>
                        <span className="footer__social--icons"><a href="./#" className="footer__social--links"><i className="fab fa-linkedin-in"></i></a></span>
                    </div>

                    <div className="footer__links">
                        <ul className="footer__list">
                            <li className="footer__list--item"><a href="./#">Terms of Use</a></li>
                            <li className="footer__list--item"><a href="./#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer__copyright">&copy; 2021 Pixtool</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
