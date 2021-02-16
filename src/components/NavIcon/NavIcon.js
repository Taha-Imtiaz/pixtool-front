import React from 'react';
import './NavIcon.scss';

function NavIcon(props) {
    return (
        <div class="nav" onClick = {props.toggle}>
            <input type="checkbox" class="nav__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" class="nav__button">
                <span class="nav__icon">&nbsp;</span>
            </label>
        </div>
    )
}

export default NavIcon
