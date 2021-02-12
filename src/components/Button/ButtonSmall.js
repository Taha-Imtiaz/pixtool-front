import React from 'react'

function ButtonSmall(props) {
    return (
        <div>
            <button class="btn btn--small btn--blue" onClick={() => props.click()}>{props.text}</button>
        </div>
    )
}

export default ButtonSmall
