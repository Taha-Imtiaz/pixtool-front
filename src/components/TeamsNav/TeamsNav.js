import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../Redux/project/projectActions';
import './TeamsNav.scss';

const TeamsNav = ({ addProjectModalToggle, show, getProject, account }) => {


    // This state is used for toggling Sidebar Team Nav Lists
    const [teamItemIndex, setTeamItemIndex] = useState(null)
    const [teamDropdown, setTeamDropDown] = useState(false)

    // This Function is responsible for toggling Sidebar Team Nav Lists
    const toggleTeamNav = (index) => {
        if (index === teamItemIndex) {
            setTeamItemIndex(-1)
        }
        //    set the index of teamItem to the index of item which was clicked 
        else {
            setTeamItemIndex(index)
        }
    }
    // Function to close the Profile Dropdown whenever clicked outside it
    const closeTeamsDropdown = (event) => {
        // Get parent element and check if click happened outside parent only
        const parent = document.querySelector(".project__item");
        // let teamDropdown = document.querySelector('.teamDropdown');

        if (parent && !parent.contains(event.target)) {
            setTeamDropDown(false)
        }
    }
    const toggleTeamsDropDown = () => {
        // let teamDropdownMenu = document.querySelector('.teamDropdown');

        console.log("clicked", teamDropdown)
        setTeamDropDown(!teamDropdown)
        // if (teamDropdown === true) {
        //     teamDropdownMenu.style.display = 'block';

        // } else {
        //     teamDropdownMenu.style.display = 'none';
        // }
    }

    useEffect(() => {
        // Listener to close the Profile Dropdown whenever clicked outside it
        document.addEventListener('click', (e) => closeTeamsDropdown(e), false);

    }, []);

    return (
        <div className="teamsNav">
            <ul className="teamsNav__list">
                {account && account.map((account, index) => <li key={account._id} className="teamsNav__item">
                    <div className="teamsNav__item__head" onClick={() => toggleTeamNav(index)}>
                        <div className="teamsNav__center">
                            <span className="teamsNav__icon">
                                {index === teamItemIndex ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i>}
                            </span>

                            <span className="teamsNav__text truncate" title={account.name}>{account.name}</span>
                            <span className="teamsNav__addBtn" >
                                <i className="fas fa-plus-circle" onClick={(e) => addProjectModalToggle(e, account._id)}></i>
                            </span>
                        </div>
                    </div>

                    {index === teamItemIndex && <div className="teamsNav__item__body">
                        <ul className="project__list">
                            {account.projects && account.projects.map((project) => <li key={project._id} className="project__item">
                                <span className="project__item--name" onClick={() => getProject(project._id)}>{project.name}</span>
                                <span className="project__item--icon" >
                                    <i className="fas fa-ellipsis-v" onClick={toggleTeamsDropDown}></i>
                                  { teamDropdown && <div>
                                        <ul >
                                            <li className="teamDropdown__listItem" ><span className="teamDropdown__listOption"><i className="fas fa-user-circle pd-r-1-5"></i> Account Settings</span></li>
                                            <li className="teamDropdown__listItem"><span className="teamDropdown__listOption"><i className="fas fa-headset pd-r-1-5"></i> Support FAQ</span></li>
                                            <li className="teamDropdown__listItem" ><span className="teamDropdown__listOption"><i className="fas fa-sign-out-alt pd-r-1-5"></i> Log out</span></li>
                                        </ul>
                                    </div>}
                                </span>


                            </li>)}

                        </ul>
                    </div>}
                </li>)}


            </ul>
        </div>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account
})
var mapDispatchToProps = {
    getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsNav)
