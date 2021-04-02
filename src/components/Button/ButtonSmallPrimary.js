import React from 'react'

function ButtonSmallPrimary({ text, type = "button", ...props }) {

    return (
        <div>
            { props.click ?
                <button className="btn btn--small btn--primary" type={type} onClick={() => props.click()}>{text}</button>
                : 
                <button className="btn btn--small btn--primary" type={type}>{text}</button>
            }
        </div>
    )
}

export default ButtonSmallPrimary
