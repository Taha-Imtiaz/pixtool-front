import { React, useState } from 'react';
import './Sidebar.scss';

import NavIcon from '../NavIcon/NavIcon';

import Logo from '../../images/logo.png';

function Sidebar({ menu1 }) {

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

                <NavIcon toggle={(e) => toggleSidebar(e)} />

                <div className={drawer ? 'sidebar__logo' : 'dis-none'}>
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

            </div>

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className='sidebar__item'>
                        {menu1.map((x, i) => {
                            <div className={drawer ? 'sidebar__option' : 'sidebar__option just-cont-cen'}>
                                <i className={x.icon}></i>
                                <span className={drawer ? 'sidebar__text' : 'dis-none'}>My Library</span>
                            </div>
                        })}
                    </li>
                </ul>
            </nav>

            <div className="sidebar__menu">

            </div>
        </div>
    )
}

export default Sidebar
