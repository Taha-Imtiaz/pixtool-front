import React from 'react';
import './PlayerP.scss';
import Video from '../../../images/mov_bbb.mp4'

function PlayerP() {
    return (
        <div>
            <video>
                {/* <source src={Video} type="video/mp4"><source/> */}
                Your browser does not support HTML video.
            </video>
        </div>
    )
}

export default PlayerP
