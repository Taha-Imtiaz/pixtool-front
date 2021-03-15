import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Library.scss';

import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Dropdown from '../Dropdown/Dropdown'
import ThumbnailCard from '../../components/Cards/ThumbnailCard/ThumbnailCard';

import { getProject } from '../../Redux/project/projectActions';
import ThumbnailFolderCard from '../Cards/ThumbnailFolderCard/ThumbnailFolderCard';


const Library = ({ resources, teams, getProject }) => {

    const createNew = () => { }
    console.log(resources)

    //show all the assets (projects) of 1st team
    useEffect(() => {
        if (teams) {
            // get all projects of first team
            let { projects } = teams[0];
            console.log(projects)
            // get assets of 1st project
            getProject(projects[0]._id)
        }
    }, [teams]);

    // Dropdown Option Values
    let newUpload = [
        { rightIcon: '', leftIcon: '', value: 'File Upload', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'New Folder', goToMenu: '' }
    ];

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
                            {/* <Button text="New" click={createNew} /> */}
                            <Dropdown text="New" menuItems={newUpload} />
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
                        {/* <ThumbnailFolderCard /> */}
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
