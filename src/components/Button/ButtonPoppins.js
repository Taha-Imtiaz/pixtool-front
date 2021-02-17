import React from 'react';
import './Button.scss'

function ButtonPoppins(props) {
    return (
        <div>
            <button className="btn btn--poppins btn--primary" onClick = {() => props.click()}>{props.text}</button>
        </div>
    )
}

export default ButtonPoppins
