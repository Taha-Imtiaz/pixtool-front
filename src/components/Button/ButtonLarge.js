import React from 'react';
import './Button.scss'

function Button(props) {
    return (
        <div>
            <button class="btn btn--large btn--blue" onClick = {() => props.click()}>{props.text}</button>
        </div>
    )
}

export default Button