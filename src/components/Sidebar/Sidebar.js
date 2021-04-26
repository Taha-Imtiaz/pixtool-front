import { React, useState } from 'react';
import { withRouter } from "react-router-dom";

import './Sidebar.scss';

import Logo from '../../images/logo.png';
import NavIcon from '../NavIcon/NavIcon';
import { Link } from 'react-router-dom';

function Sidebar({ children, menu1, history }) {

    // This state is used for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    //This function is responsible for toggling sidebar
    const toggleSidebar = (e) => {
        setDrawer(!drawer)
    }


    return (
        <div className={drawer ? 'sidebar' : 'sidebarCollapse sidebar'}>
            <div className={drawer ? 'sidebar__top' : 'sidebar__top just-cont-cen'}>
                <div className={drawer ? 'sidebar__logo' : 'dis-none'}>
                    <img src={Logo} alt="Logo" className="logo-img" onClick={() => history.push(`/home/library/${sessionStorage.getItem("selectedProjectId")}`)} />
                </div>

                <NavIcon toggle={(e) => toggleSidebar(e)} />
            </div>

            <div className={drawer ? 'sidebar__teamsMenu' : 'sidebar__teamsMenu--hidden'}>
                {children}
            </div>

            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    {menu1.map((x, i) =>
                        <li className='sidebar__item' key={i}>
                            <Link to={x.route ? x.route : `/home/library/${sessionStorage.getItem("selectedProjectId")}`}>
                                <div className={drawer ? 'sidebar__option' : 'sidebar__option just-cont-cen'}>
                                    <i className={x.icon}></i>
                                    <span className={drawer ? 'sidebar__text' : 'dis-none'}>{x.value}</span>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="sidebar__menu"></div>
        </div>
    )
}





export default (withRouter(Sidebar))
