import React from 'react';
import { useLocation } from 'react-router-dom'

import './Accounts.scss';

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Profile from '../../components/AccountsComponents/Profile/Profile';
import Teams from '../../components/AccountsComponents/Teams/Teams';


/* Arrays To Pass The Sidebar Content In Props */
let sidebarMenu1 = [
    { icon: 'fas fa-users', value: 'Teams', route: '/accounts/team' },
    { icon: 'fas fa-user-circle', value: 'Profile', route: '/accounts' }
];

const Accounts = () => {
    // For Find Path
    const location = useLocation();

    //fetch the account of the user  
    // useEffect(() => {
    // getUser()
    // }, [])


    return (
        <div className="profileSettings page-wrapper">
            <Sidebar menu1={sidebarMenu1} />

            <div>
                <Header />
                <div className="profileSettings__tabsWrapper">
                    {location.pathname === '/accounts' ? <Profile /> : <Teams />}
                </div>
            </div>
        </div>
    )
}
export default Accounts
