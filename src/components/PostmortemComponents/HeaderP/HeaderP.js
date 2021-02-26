import React from 'react';
import './HeaderP.scss';
import Logo from '../../../images/logo.png';
import Button from '../../Button/Button';
import NavIcon from '../../NavIcon/NavIcon';
import Dropdown from '../../Dropdown/Dropdown';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';

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

    // Dropdown Option Values
    let status = [
        { rightIcon: '', leftIcon: '', value: 'Needs Review', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'In Progress', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Approved', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'No Status', goToMenu: '' }];

    let options = [
        {
            rightIcon: <ChevronIcon />, leftIcon: '', value: 'Download', goToMenu: 'download',
            child: [
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' }]
        },
        { rightIcon: '', leftIcon: '', value: 'Make Private', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Reveal in project', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Delete', goToMenu: '' }];

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
                <Dropdown text="Status" menuItems={status} />

                <Dropdown text="---" menuItems={options} />

                <Button text="Share" />

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
