import React from 'react';
import './NavIcon.scss';

function NavIcon(props) {
    return (
        <div className="nav">
            <input type="checkbox" className="nav__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="nav__button" onClick = {props.toggle}>
                <span className="nav__icon">&nbsp;</span>
            </label>
        </div>
    )
}

export default NavIcon
