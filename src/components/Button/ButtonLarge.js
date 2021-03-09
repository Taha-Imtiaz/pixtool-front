import React from 'react';
import './Button.scss'

function Button(props) {
    return (
        <div>
            <button type = {props.type} className="btn btn--large btn--primary">{props.text}</button>
        </div>
    )
}

export default Button