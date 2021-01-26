import React from 'react'
import './HeroSection.scss'
import billboardBG from '../../images/billboardBG.png';
import Logo from '../../images/logo-black.png';
import ButtonPoppins from "../../components/Button/ButtonPoppins";
import FeaturesCard from '../../components/Cards/FeaturesCard';
import { Link } from 'react-router-dom';

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
                            <li className="navigation__links">
                                {/* <a href="" className="navigation__link navigation__link--blue">Login</a> */}
                                <Link to="/sign-in" className="navigation__link navigation__link--blue">Sign In</Link>
                            </li>
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
        </div>
    )
}

export default HeroSection
