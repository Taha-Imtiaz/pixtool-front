import React from 'react'
import './HeroSection.scss'
import billboardBG from '../../images/billboardBG.png';
import Logo from '../../images/logo-black.png';
import OnePlatform from '../../images/one-platform-for-all.jpg';
import MoreGraphics from '../../images/more-graphics.jpg';
import ButtonPoppins from "../../components/Button/ButtonPoppins";
import FeaturesCard from '../../components/Cards/FeaturesCard';

function HeroSection() {

    const createNew = () => { }


    return (
        <div className="heroSec">
            <div className="heroSec__header">
                <div className="heroSec__logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

                <div className="heroSec__nav">
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__links"><a href="" className="navigation__link">Home</a></li>
                            <li className="navigation__links"><a href="" className="navigation__link">Partners</a></li>
                            <li className="navigation__links"><a href="" className="navigation__link">Services</a></li>
                            <li className="navigation__links"><a href="" className="navigation__link">About us</a></li>
                            <li className="navigation__links"><a href="" className="navigation__link navigation__link--blue">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="heroSec__billBoard">
                <div className="billBoard">
                    <div className="billBoard__left">
                        <span className="billBoard__text">
                            Best Video 3D <span className="billBoard__text--blue">Editing</span> Tool
                            <ButtonPoppins text="Explore" click={createNew} />
                        </span>
                    </div>
                    <div className="billBoard__right">
                        <img src={billboardBG} alt="An image showing video editing" className="billBoard__img" />
                    </div>
                </div>
            </div>

            <div className="heroSec__features">
                <div className="features">
                    <h2 className="heading-features">
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
                    <h2 className="heading-features">One platform to manage them all</h2>
                    <div className="stories__content">
                        <img src={OnePlatform} alt="One of Pixtool's tab screenshot" className="stories__img stories__img--1" />
                        <p className="stories__text stories__text--1">As designers, we know inspiration can make the difference between success and failure. Switching programs, converting files, waiting on hardware - these tasks can get in the way of a great idea. With pixtool you have all the tools you need to design, adjust and manage every element -  LED surfaces to stage layouts, weekend events to world tours. Pixtool has you covered.</p>
                    </div>
                </div>
                <div className="stories">
                    <h2 className="heading-features">One platform to manage them all</h2>
                    <div className="stories__content">
                        <img src={MoreGraphics} alt="A girl's face" className="stories__img stories__img--2" />
                        <p className="stories__text stories__text--2">As designers, we know inspiration can make the difference between success and failure. Switching programs, converting files, waiting on hardware - these tasks can get in the way of a great idea. With pixtool you have all the tools you need to design, adjust and manage every element -  LED surfaces to stage layouts, weekend events to world tours. Pixtool has you covered.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
