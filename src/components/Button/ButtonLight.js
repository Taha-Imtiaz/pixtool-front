import React from 'react'

function ButtonLight(props) {
    return (
        <div>
            <button className="btn btn--normal btn--light" onClick = {props.click}>{props.text}</button>
        </div>
    )
}

export default ButtonLight
