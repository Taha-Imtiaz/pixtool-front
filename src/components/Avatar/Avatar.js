import React from 'react';
import './Avatar.scss';
import DP from '../../images/profile.png';

function Avatar({ profileImg }) {
    return (
        <div className="avatarC">
            {/* <img src={DP} alt="Display Profile"/> */}
            {/* Temporary */}
            { profileImg ?
                <img src={profileImg} alt="Display Profile"/>
                :
                <img src={DP} alt="Display Profile"/>
            }
        </div>
    )
}

export default Avatar
