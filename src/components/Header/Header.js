import React from 'react'
import './Header.scss';
import Profile from '../../images/profile.png';
import { connect } from 'react-redux';
import { Fragment } from 'react';

function Header({ account }) {

    return (
        <Fragment>
           
                <div className="header">
                    <div className="search">
                        <i className="fas fa-search search__icon"></i>
                        <input type="text" className="search__input" name="search" placeholder="Search"></input>
                    </div>

                    <div className="profile">
                      { account && <span className="profile__text">{account.name}</span>}
                        <span className="profile__picture">
                            <img src={Profile} alt="Profile" />
                            <i className="fas fa-angle-down profile__icon"></i>
                        </span>
                        <span className="profile__notification"><i className="fas fa-bell"></i> <span className="countNotification">1</span></span>
                    </div>
                </div>
            
        </Fragment>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account
})
export default connect(mapStateToProps)(Header)
