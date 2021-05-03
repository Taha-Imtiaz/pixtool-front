import React, { useEffect } from 'react';

import './Teams.scss';

import ButtonSmall from '../../Button/ButtonSmall';
import ButtonSmallPrimary from '../../Button/ButtonSmallPrimary';
import Dropdown from '../../Dropdown/Dropdown';

import DisplayProfile from '../../../images/profile.png';
import { connect } from 'react-redux';
import { getAllTeams } from '../../../Redux/team/teamActions';
import TimeAgo from 'react-timeago';


const Teams = ({ teamName , getAllTeams,accountId,teams}) => {
    const createNew = () => { }
    useEffect(() => {
       if(accountId) {
           let {_id} = accountId[0]
           console.log(_id)
        getAllTeams(_id)
       }
    },[accountId])

    // Dropdown Option Values
    let sortBy = [
        { rightIcon: '', leftIcon: '', value: 'Name', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Last Scene', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Role', goToMenu: '' }
    ];
console.log(teams)
    return (
        <div className="teams">
            {/* This is Account Page's main tab which include Team Members & Teams */}
            {/* <Tabs className="tabs"> */}
          
            {/* Team Members Tab Content */}
            <div label="Team Members">
            {/* <div className = "teamName">
                {teamName}
            </div> */}
                <div className="topBtns">
                    <ButtonSmall text="Manage Collaborators" click={createNew} />
                    <ButtonSmallPrimary text="Invite Users" click={createNew} />
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
                                    <th className="teamMembersTable__head">
                                        {/* <input type="checkBox" className="checkbox" /> */}
                                        </th>
                                    <th className="teamMembersTable__head">Name</th>
                                    <th className="teamMembersTable__head">Created At</th>
                                    <th className="teamMembersTable__head">Role</th>
                                </tr>
                                {/* This teamMembersTable__row--data will be repeated */}
                               {teams && teams.map((team) =>  <tr className="teamMembersTable__row teamMembersTable__row--data">
                                    <td className="teamMembersTable__data"><input type="checkBox" className="checkbox" /></td>
                                    <td className="teamMembersTable__data teamMembersTable__data--flex">
                                        <img src={team.creator_id.images.img_32} alt="Display Profile" className="teamMembersTable__img" />
                                        <div className="teamMembersTable__text">
                                            <div className="teamMembersTable__text--name">{team.name}</div>
                                            {/* <div className="teamMembersTable__text--email">usama1234@email.com</div> */}
                                        </div>
                                    </td>
                                    <td className="teamMembersTable__data"><TimeAgo date={team.createdAt} minPeriod={10} /></td>
                                    <td className="teamMembersTable__data">Owner</td>
                                </tr>)}
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Teams Tab Content */}
            {/* <div label="Teams">
                    Teams
                </div> */}
            {/* </Tabs> */}
        </div>
    )
}
var mapStateToProps = (state) => ({
    // teamName: state.teams && state.teams.teamList && state.teams.teamList.name,
    accountId: state.users && state.users.user && state.users.user.account_id,
    teams: state.teams && state.teams.teams 
    
})
var mapDispatchToProps = {
    getAllTeams
}
export default connect(mapStateToProps,mapDispatchToProps)(Teams)
