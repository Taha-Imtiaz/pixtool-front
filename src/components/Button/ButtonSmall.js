import React from 'react'

function ButtonSmall(props) {
    return (
        <div>
            <button className="btn btn--small btn--light" onClick={() => props.click()}>{props.text}</button>
        </div>
    )
}

export default ButtonSmall
