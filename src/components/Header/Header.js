import React from 'react'
import './Header.scss';
import Profile from '../../images/profile.png';

function Header() {
    return (
        <div className="header">
            <div className="search">
                <i class="fas fa-search search__icon"></i>
                <input type="text" className="search__input" name="search" placeholder="Search"></input>
            </div>

            <div className="profile">
                <span className="profile__text">John Doe</span>
                <span className="profile__picture">
                    <img src={Profile} alt="Profile" />
                    <i class="fas fa-angle-down profile__icon"></i>
                </span>
                <span className="profile__notification"><i class="fas fa-bell"></i> <span className="countNotification">1</span></span>
            </div>
        </div>
    )
}

export default Header
