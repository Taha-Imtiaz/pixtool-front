import React from 'react';
import './Sidebar.scss';
import Logo from '../../images/logo.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={Logo} alt="Logo" className="logo-img" />
            </div>

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__link">
                        <a href="./#">
                            <i class="far fa-user"></i>
                            <span>Team Management</span>
                        </a>
                    </li>
                    <li className="sidebar__link">
                        <a href="./#">
                            <i class="far fa-user"></i>
                            <span>Account Management</span>
                        </a>
                    </li>
                    <li className="sidebar__link">
                        <a href="./#">
                            <i class="far fa-user"></i>
                            <span>Join Requests</span>
                        </a>
                    </li>
                    <li className="sidebar__link">
                        <a href="./#">
                            <i class="far fa-user"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="sidebar__menu">

            </div>
        </div>
    )
}

export default Sidebar
