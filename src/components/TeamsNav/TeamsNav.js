import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../Redux/project/projectActions';
import './TeamsNav.scss';

const TeamsNav = ({ toggleModal, show , getProject, teams}) => {

    // This state is used for toggling Sidebar Team Nav Lists
    const [teamNav, setTeamNav] = useState(false);
    const [teamItemIndex, setTeamItemIndex] = useState(null)

    // This Function is responsible for toggling Sidebar Team Nav Lists
    const toggleTeamNav = (index) => {
      
        setTeamItemIndex(index)
      
       if(index === teamItemIndex){
        setTeamNav(true)
       }
       else {
           setTeamNav(false)
       }
    }
    
    return (
        <div className="teamsNav">
            <ul className="teamsNav__list">
               {teams && teams.map((team, index) =>  <li key = {team._id} className="teamsNav__item">
                    <div className="teamsNav__item__head" onClick={() => toggleTeamNav(index)}>
                        <div className="teamsNav__center">
                            <span className="teamsNav__icon">
                              { index === teamItemIndex ? <i className="fas fa-chevron-down"></i>:  <i className="fas fa-chevron-right"></i>}
                            </span>
                            <span className="teamsNav__text">{team.name}</span>
                            <span className="teamsNav__addBtn" onClick={toggleModal}>
                                <i className="fas fa-plus-circle"></i>
                            </span>
                        </div>
                    </div>
                   
                  { index === teamItemIndex &&     <div className="teamsNav__item__body">
                            <ul className="project__list">
                             {team.projects && team.projects.map((project) =>    <li key = {project._id} className="project__item">
                                    <span className="project__item--name" onClick = {() => getProject(project._id)}>{project.name}</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li>)}
                                {/* <li className="project__item">
                                    <span className="project__item--name">Demo Project</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li>
                                <li className="project__item">
                                    <span className="project__item--name">Demo Project</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li> */}
                            </ul>
                        </div>}
                      
                    
                </li>)}

                {/* <li className="teamsNav__item">
                    <div className="teamsNav__item__head" onClick={toggleTeamNav}>
                        <div className="teamsNav__center">
                            <span className="teamsNav__icon">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                            <span className="teamsNav__text">Usama's Team</span>
                            <span className="teamsNav__addBtn" onClick={toggleModal}>
                                <i className="fas fa-plus-circle"></i>
                            </span>
                        </div>
                    </div>
                    {teamNav ?
                        <div className="teamsNav__item__body">
                            <ul className="project__list">
                                <li className="project__item">
                                    <span className="project__item--name">Demo Project</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li>
                                <li className="project__item">
                                    <span className="project__item--name">Demo Project</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li>
                                <li className="project__item">
                                    <span className="project__item--name">Demo Project</span>
                                    <span className="project__item--icon"><i className="fas fa-ellipsis-v"></i></span>
                                </li>
                            </ul>
                        </div>
                        : null
                    }
                </li> */}
            </ul>
        </div>
    )
}
var mapStateToProps = (state) => ({
    teams: state.teams && state.teams.teamList
})
var mapDispatchToProps = {
    getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsNav)
