import React from 'react';
import './Button.scss'

function Button({ text, type = "button" }) {
    return (
        <div>
            <button type = {type} className="btn btn--large btn--primary">{text}</button>
        </div>
    )
}

export default Button