import React from 'react';
import './HeaderP.scss';
import Logo from '../../../images/logo.png'
import ButtonLight from '../../Button/ButtonLight'
import NavIcon from '../../NavIcon/NavIcon'

function HeaderP(props) {


    //This function is responsible for toggling sidebar
    const toggleSidebar = (e) => {
        // e.stopPropagation()
        // e.preventDefault()
        // setDrawer(!drawer)
        // console.log(drawer)

        props.toggle()
    }

    const goBack = () => {
        window.history.back(1);
    }
    return (
        <div className="headerP">
            <div className="headerP__left-box">
                <span className="headerP__back-btn" onClick={goBack}><i className="fas fa-less-than"></i></span>
                <span className="headerP__title .truncate">Best Samsung Mobile.mp4</span>
            </div>
            <div className="headerP__logo">
                <img src={Logo} alt="Logo" className="logo-img" />
            </div>

            <div className="headerP__right-box">
                <select className="dropdowns" name="cars">
                    <option disabled value="" default>Approved</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <select className="dropdowns" name="cars">
                    <option disabled value="" default>...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <ButtonLight text="Share" />

                <span className="headerP__notification"><i className="fas fa-bell"></i> <span className="notificationCount">1</span></span>

                <span className="headerP__help-icon">
                    <a href="./#" className="txt-dec-none"><i className="fas fa-question"></i></a>
                </span>

                <NavIcon toggle={(e) => toggleSidebar(e)} />
            </div>
        </div>
    )
}

export default HeaderP
