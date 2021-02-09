import React from 'react';
import './HeaderP.scss';
import Logo from '../../../images/logo.png'
import ButtonLight from '../../Button/ButtonLight'

function HeaderP() {
    return (
        <div className="headerP">
            <div className="headerP__left-box">
                <span className="headerP__back-btn"><a href="./#" className="txt-dec-none"><i class="fas fa-less-than"></i></a></span>
                <span className="headerP__title .truncate">Best Samsung Mobile.mp4</span>
            </div>
            <div className="headerP__logo">
                <img src={Logo} alt="Logo" className="logo-img" />
            </div>

            <div className="headerP__right-box">
                <select className="dropdown" name="cars">
                    <option disabled value="" default>Approved</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <select className="dropdown" name="cars">
                    <option disabled value="" default>...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <ButtonLight text="Share" />

                <span className="headerP__notification"><i class="fas fa-bell"></i> <span className="notificationCount">1</span></span>

                <span className="headerP__help-icon">
                    <a href="./#" className="txt-dec-none"><i class="fas fa-question"></i></a>
                </span>
            </div>
        </div>
    )
}

export default HeaderP
