import React from 'react';
import './NavIcon.scss';

function NavIcon(props) {
    return (
        <div class="navigation" onClick = {props.toggle}>
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
        </div>
    )
}

export default NavIcon
