import { React, useEffect } from 'react'
import './Header.scss';
import Profile from '../../images/profile.png';
import { connect } from 'react-redux';

function Header({ account }) {



    const closeProfileDropdown = (event) => {
        // Get parent element and check if click happened outside parent only
        const parent = document.querySelector(".profile__picture");
        let profileDropdown = document.querySelector('.profileDropdown');
        if (parent && !parent.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    }

    const toggleProfile = () => {
        let profileDropdown = document.querySelector('.profileDropdown');
        if (profileDropdown.style.display === 'none') {
            profileDropdown.style.display = 'block';

        } else {
            profileDropdown.style.display = 'none';
        }
    }

    useEffect(() => {
        document.addEventListener('click', (e) => closeProfileDropdown(e), false);

    }, [])

    return (
           
                <div className="header">
                    <div className="search">
                        <i className="fas fa-search search__icon"></i>
                        <input type="text" className="search__input" name="search" placeholder="Search"></input>
                    </div>

            <div className="profile">
              {account &&  <span className="profile__text">{account.name}</span>}
                <span className="profile__picture">
                    <img src={Profile} alt="Profile" onClick={toggleProfile} />
                    <i className="fas fa-angle-down profile__icon" onClick={toggleProfile}></i>
                    <div className="profileDropdown">
                        <ul className="profileDropdown__list">
                            <li className="profileDropdown__listItem"><span className="profileDropdown__listOption"><i className="fas fa-user-circle pd-r-1-5"></i> Account Settings</span></li>
                            <li className="profileDropdown__listItem"><span className="profileDropdown__listOption"><i className="fas fa-headset pd-r-1-5"></i> Support FAQ</span></li>
                            <li className="profileDropdown__listItem"><span className="profileDropdown__listOption"><i className="fas fa-sign-out-alt pd-r-1-5"></i> Log out</span></li>
                        </ul>
                    </div>
                </span>
                <span className="profile__notification"><i className="fas fa-bell"></i> <span className="countNotification">1</span></span>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account
})
export default connect(mapStateToProps)(Header)
