import { React, useEffect } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../Redux/user/userActions';

import './Header.scss';

function Header({ user, logout, history }) {


    const logOut = () => {
      history.push("/sign-in")
        logout();
    }

    // Function to close the Profile Dropdown whenever clicked outside it
    const closeProfileDropdown = (event) => {
        // Get parent element and check if click happened outside parent only
        const parent = document.querySelector(".profile__picture");
        let profileDropdown = document.querySelector('.profileDropdown');
        
        if (parent && !parent.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    }

    // To close the Profile Dropdown whenever clicked outside it
    useEffect(() => {
        // Listener to close the Profile Dropdown whenever clicked outside it
        document.addEventListener('click', (e) => closeProfileDropdown(e), false);

    }, []);

    // Function To Toggle The Profile Dropdown
    const toggleProfile = () => {
        let profileDropdown = document.querySelector('.profileDropdown');
        
        if (profileDropdown.style.display === 'none') {
            profileDropdown.style.display = 'block';

        } else {
            profileDropdown.style.display = 'none';
        }
    }

    return (

        <div className="header">
            <div className="search">
                <i className="fas fa-search search__icon"></i>
                <input type="text" className="search__input" name="search" placeholder="Search"></input>
            </div>

            <div className="profile">
                {user && <span className="profile__text">{user.name}</span>}
                <span className="profile__picture">
                    {user && <img src={user.images.profile_image} alt="Profile" onClick={toggleProfile} />}
                    <i className="fas fa-angle-down profile__icon" onClick={toggleProfile}></i>
                    <div className="profileDropdown">
                        <ul className="profileDropdown__list">
                            <li className="profileDropdown__listItem"><span className="profileDropdown__listOption"><i className="fas fa-user-circle pd-r-1-5"></i> Account Settings</span></li>
                            <li className="profileDropdown__listItem"><span className="profileDropdown__listOption"><i className="fas fa-headset pd-r-1-5"></i> Support FAQ</span></li>
                            <li className="profileDropdown__listItem" onClick={() => logOut()}><span className="profileDropdown__listOption"><i className="fas fa-sign-out-alt pd-r-1-5"></i> Log out</span></li>
                        </ul>
                    </div>
                </span>
                <span className="profile__notification"><i className="fas fa-bell"></i> <span className="countNotification">1</span></span>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    user: state.users && state.users.user
})
var mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
