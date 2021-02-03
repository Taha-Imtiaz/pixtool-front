import { React, useState } from 'react';
import './Sidebar.scss';
import Logo from '../../images/logo.png';

function Sidebar() {

    const [drawer, setDrawer] = useState(0)
    
    const drawerClose = () => {
        console.log('Clicked')
        if (drawer) {
            alert('Drawer Opening')
            setDrawer(1);
        }
        else {
            alert('Drawer Closing')
            setDrawer(0);
        }
    }

    const drawerOpen = () => {}


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

            <span className="sidebar__drawer sidebar__drawer--closer" onClick={() => drawerClose()}>
                &#8617;
            </span>

            <span className="sidebar__drawer sidebar__drawer--opener" onClick={() => drawerOpen()}>
                &#8618;
            </span>
        </div>
    )
}

export default Sidebar
