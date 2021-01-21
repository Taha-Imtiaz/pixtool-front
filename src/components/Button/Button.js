import React from 'react';
import './Button.scss'

function Button(props) {
    return (
        <div>
            <button class="btn btn--normal">{props.text}</button>
        </div>
    )
}

export default Button
