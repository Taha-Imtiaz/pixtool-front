import React, { useState } from 'react';
import './TeamsNav.scss';

const TeamsNav = ({ toggleModal, show }) => {

    // This state is used for toggling Sidebar Team Nav Lists
    const [teamNav, setTeamNav] = useState(false);

    // This Function is responsible for toggling Sidebar Team Nav Lists
    const toggleTeamNav = () => {
        setTeamNav(!teamNav)
    }

    return (
        <div className="teamsNav">
            <ul className="teamsNav__list">
                <li className="teamsNav__item">
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
                        :
                        null
                    }
                </li>

                <li className="teamsNav__item">
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
                </li>
            </ul>
        </div>
    )
}

export default TeamsNav
