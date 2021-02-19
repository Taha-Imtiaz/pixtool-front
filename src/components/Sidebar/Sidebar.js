import { React, useState } from 'react';
import './Sidebar.scss';
import Logo from '../../images/logo.png';
import NavIcon from '../NavIcon/NavIcon';

function Sidebar() {

    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    //This function is responsible for toggling sidebar
    const toggleSidebar = (e) => {
        // e.stopPropagation()
        // e.preventDefault()
        setDrawer(!drawer)
        // console.log(drawer)
    }

    return (
        <div className={drawer ? 'sidebar' : 'sidebarCollapse sidebar'}>
            <div className={drawer ? 'sidebar__top' : 'sidebar__top just-cont-cen'}>

                <div className="pd-t-1-5" >
                    <NavIcon toggle={(e) => toggleSidebar(e)} />
                </div>

                <div className={drawer ? 'sidebar__logo' : 'dis-none'}>
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

            </div>

            <nav className="sidebar__nav">
                <ul className={drawer ? 'sidebar__list' : 'sidebar__list'}>
                    <li className={drawer ? 'sidebar__link' : 'sidebar__link txt-align-cen'}>
                        <a href="./#">
                            {/* <i className="fas fa-book"></i> */}
                            <i className={drawer ? 'fas fa-book' : 'fas fa-book margin-0'}></i>
                            <span className={drawer ? 'sidebar__link--name' : 'dis-none'}>My Library</span>
                        </a>
                    </li>
                    {/* <li className="sidebar__link">
                        <a href="./#">
                            <i className="far fa-user"></i>
                            <span>Account Management</span>
                        </a>
                    </li> */}
                    <li className={drawer ? 'sidebar__link' : 'sidebar__link txt-align-cen'}>
                        <a href="./#">
                            {/* <i className="far fa-file-alt"></i> */}
                            <i className={drawer ? 'far fa-file-alt' : 'far fa-file-alt margin-0'}></i>
                            <span className={drawer ? 'sidebar__link--name' : 'dis-none'}>Shared with me</span>
                        </a>
                    </li>
                    <li className={drawer ? 'sidebar__link' : 'sidebar__link txt-align-cen'}>
                        <a href="./#">
                            {/* <i class="fas fa-cog"></i> */}
                            <i className={drawer ? 'fas fa-cog' : 'fas fa-cog margin-0'}></i>
                            <span className={drawer ? 'sidebar__link--name' : 'dis-none'}>Settings</span>
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
