import React from 'react';
import './Avatar.scss';
import DP from '../../images/profile.png';

function Avatar() {
    return (
        <div className="avatarC">
            <img src={DP} alt="Display Profile"/>
        </div>
    )
}

export default Avatar
