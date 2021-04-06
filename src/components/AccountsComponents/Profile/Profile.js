import React, { useEffect, useState } from 'react';

import './Profile.scss';

import Button from '../../Button/Button';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../Redux/user/userActions';
import { Fragment } from 'react';


const Profile = ({ user, updateUserProfile }) => {
    // user state for autofill form
    let [userState, setUseState] = useState({
        fullName: '',
        location: '',
        bio: ''
    })
    useEffect(() => {
       if(user) {
        let { full_name, location, bio } = user
        setUseState({
            fullName: full_name,
            location: location,
            bio: bio
        })
       }
    }, [user])



    // handler for changing formInput
    const handleFormInput = (e) => {
        let { name, value } = e.target
        setUseState({
            ...userState,
            [name]: value
        })
    }
    const updateProfile = () => {
        let { fullName, location, bio } = userState
        const data = new FormData();
        data.append(
            "data",
            JSON.stringify({
                full_name: fullName, location, bio
            })
          );
     
        updateUserProfile(data)
    }

    // let { full_name, images: { profile_image } } = user
    return (
     <Fragment>
        {user &&  <div className="profileTab">
            <div className="profileInfo">
                <img src={user.images.profile_image} alt="Display Profile" className="profileInfo__img" />
                <div className="profileInfo__headName">{userState.fullName}</div>
                <div className="profileInfo__inputsBox">
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--half">
                        <label htmlFor="name" className="profileInfo__label">Name</label>
                        <input type="text" className="profileInfo__input" name="fullName" value={userState.fullName} onChange={handleFormInput} />
                    </div>
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--half">
                        <label htmlFor="location" className="profileInfo__label">Location</label>
                        <input type="text" className="profileInfo__input" name="location" value={userState.location} onChange={handleFormInput} />
                    </div>
                    <div className="profileInfo__inputsGroup profileInfo__inputsGroup--bio">
                        <label htmlFor="bio" className="profileInfo__label ">Bio</label>
                        <textarea name="bio" value={userState.bio} onChange={handleFormInput} id="" className="profileInfo__input profileInfo__input--bio" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="profileInfo__btn">
                    <Button text="Save" click={updateProfile} />
                </div>
            </div>
        </div>}
     </Fragment>
    )
}
var mapStateToProps = (state) => ({
    user: state.users && state.users.user
})
var mapDispatchToProps = {
    updateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
