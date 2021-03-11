import React from 'react';

import './Profile.scss';

import Button from '../../Button/Button';
import ProfileImg from '../../../images/profile.png';

const Profile = () => {
    const createNew = () => { }
    return (
        <div className="profileTab">
            <div className="profileInfo">
                <img src={ProfileImg} alt="Display Profile" className="profileInfo__img" />
                <div className="profileInfo__headName">John Doe</div>
                <div className="profileInfo__inputsBox">
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--half">
                        <label htmlFor="name" className="profileInfo__label">Name</label>
                        <input type="text" className="profileInfo__input" name="name" />
                    </div>
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--half">
                        <label htmlFor="location" className="profileInfo__label">Location</label>
                        <input type="text" className="profileInfo__input" name="location" />
                    </div>
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--bio">
                        <label htmlFor="bio" className="profileInfo__label ">Bio</label>
                        <textarea name="bio" id="" className="profileInfo__input profileInfo__input--bio" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="profileInfo__btn">
                    <Button text="Save" onClick={createNew} />
                </div>
            </div>
        </div>
    )
}

export default Profile
