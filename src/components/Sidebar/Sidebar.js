import { React, useState } from 'react';
import './Sidebar.scss';

import Logo from '../../images/logo.png';
import NavIcon from '../NavIcon/NavIcon';

function Sidebar(props) {
    console.log(props.children)
    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    //This function is responsible for toggling sidebar
    const toggleSidebar = (e) => {
        setDrawer(!drawer)
    }

    return (
        <div className={drawer ? 'sidebar' : 'sidebarCollapse sidebar'}>
            <div className={drawer ? 'sidebar__top' : 'sidebar__top just-cont-cen'}>
                <div className={drawer ? 'sidebar__logo' : 'dis-none'}>
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

                <NavIcon toggle={(e) => toggleSidebar(e)} />
            </div>

            {props.children}

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    {props.menu1.map((x, i) =>
                        <li className='sidebar__item' key={i}>
                            <div className={drawer ? 'sidebar__option' : 'sidebar__option just-cont-cen'}>
                                <i className={x.icon}></i>
                                <span className={drawer ? 'sidebar__text' : 'dis-none'}>{x.value}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="sidebar__menu"></div>
        </div>
    )
}

export default Sidebar
