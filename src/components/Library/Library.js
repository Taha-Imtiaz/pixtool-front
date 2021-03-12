import React, { useEffect, useState } from 'react';
import './Library.scss';
import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import { connect } from 'react-redux';
import { getProject } from '../../Redux/project/projectActions';


const Library = ({ resources, teams,getProject }) => {

    const createNew = () => { }
    console.log(resources)

    //show all the assets (projects) of 1st team
    useEffect(() => {
        if (teams) {
            // get all projects of first team
            let {projects} = teams[0];
            console.log(projects)
            // get assets of 1st project
            getProject(projects[0]._id)
        }
    }, [teams])
    return (
        <div>
            <div className="library">
                <div className="library__head">
                    <Filter />
                    <div className="library__head-right">
                        <div className="avatar__container">
                            <div className="avatar">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <Avatar />
                            <Avatar />
                        </div>

                        <div className="library__head__buttons">
                            <Button text="Share" click={createNew} />
                            <Button text="Create New" click={createNew} />
                        </div>
                    </div>
                </div>

                <div className="library__main">
                    <div className="thumbnail-container">
                        {/* <ThumbnailCard /> */}
                        {/*   <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard /> */}
                        {resources && resources.map((resource) => <ThumbnailCard id={resource._id} resource={resource} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    resources: state.projects && state.projects.project && state.projects.project.resources,
    teams: state.teams && state.teams.teamList

})
var mapDispatchToProps = {
    getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
