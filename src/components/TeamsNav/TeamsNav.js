import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../Redux/project/projectActions';
import './TeamsNav.scss';

const TeamsNav = ({ addProjectModalToggle, show, getProject, account }) => {


    // This state is used for toggling Sidebar Team Nav Lists
    const [teamItemIndex, setTeamItemIndex] = useState(null)

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
                            {account.projects && account.projects.map((project) => <li key={project._id} onClick={() => getProject(project._id)} className="project__item">
                                <span className="project__item--name">{project.name}</span>
                                <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
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
