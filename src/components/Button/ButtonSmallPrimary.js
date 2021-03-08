import React from 'react'

function ButtonSmallPrimary(props) {
    return (
        <div>
            <button className="btn btn--small btn--primary" onClick={() => props.click()}>{props.text}</button>
        </div>
    )
}

export default ButtonSmallPrimary
