import React from 'react';

import './Teams.scss';

import Tabs from '../../NavigationTabs/Tabs';
import ButtonSmall from '../../Button/ButtonSmall';
import ButtonSmallPrimary from '../../Button/ButtonSmallPrimary';
import Dropdown from '../../Dropdown/Dropdown';

import DisplayProfile from '../../../images/profile.png';


const Teams = () => {
    const createNew = () => { }

    // Dropdown Option Values
    let sortBy = [
        { rightIcon: '', leftIcon: '', value: 'Name', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Last Scene', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Role', goToMenu: '' }
    ];

    return (
        <div className="teams">
            {/* This is Account Page's main tab which include Team Members & Teams */}
            <Tabs className="tabs">

                {/* Team Members Tab Content */}
                <div label="Team Members">
                    <div className="topBtns">
                        <ButtonSmall text="Manage Collaborators" onClick={createNew} />
                        <ButtonSmallPrimary text="Invite Users" onClick={createNew} />
                    </div>

                    <div className="teamMembers">
                        <div className="teamMembers__table">
                            <table className="teamMembersTable" /* border="2" cellspacing="5" cellpadding="3" bordercolor="blue" bgcolor="yellow" */>
                                <thead>
                                    <tr className="teamMembersTable__row">
                                        <th className="teamMembersTable__dropdown"><Dropdown text="Sort by" menuItems={sortBy} /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="teamMembersTable__row">
                                        <th className="teamMembersTable__head"><input type="checkBox" className="checkbox" /></th>
                                        <th className="teamMembersTable__head">Name</th>
                                        <th className="teamMembersTable__head">Last Scene</th>
                                        <th className="teamMembersTable__head">Role</th>
                                    </tr>
                                    {/* This teamMembersTable__row--data will be repeated */}
                                    <tr className="teamMembersTable__row teamMembersTable__row--data">
                                        <td className="teamMembersTable__data"><input type="checkBox" className="checkbox" /></td>
                                        <td className="teamMembersTable__data teamMembersTable__data--flex">
                                            <img src={DisplayProfile} alt="Display Profile" className="teamMembersTable__img" />
                                            <div className="teamMembersTable__text">
                                                <div className="teamMembersTable__text--name">Muhammad Usama Zuberi</div>
                                                <div className="teamMembersTable__text--email">usama1234@email.com</div>
                                            </div>
                                        </td>
                                        <td className="teamMembersTable__data">1 hour ago</td>
                                        <td className="teamMembersTable__data">Owner</td>
                                    </tr>
                                    <tr className="teamMembersTable__row teamMembersTable__row--data">
                                        <td className="teamMembersTable__data"><input type="checkBox" className="checkbox" /></td>
                                        <td className="teamMembersTable__data teamMembersTable__data--flex">
                                            <img src={DisplayProfile} alt="Display Profile" className="teamMembersTable__img" />
                                            <div className="teamMembersTable__text">
                                                <div className="teamMembersTable__text--name">Rizwan Ahmed Siddique</div>
                                                <div className="teamMembersTable__text--email">rizwan1234@email.com</div>
                                            </div>
                                        </td>
                                        <td className="teamMembersTable__data">39 minutes ago</td>
                                        <td className="teamMembersTable__data">Regular Member</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Teams Tab Content */}
                <div label="Teams">
                    Teams
                </div>
            </Tabs>
        </div>
    )
}

export default Teams
