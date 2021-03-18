import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Home.scss'

import Tabs from '../../components/NavigationTabs/Tabs';
import InnerTabs from '../../components/InnerNav/InnerTabs';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import TeamsNav from '../../components/TeamsNav/TeamsNav'
import Library from '../../components/Library/Library';
import Overview from '../../components/ShowsComponents/Overview/Overview';
import Settings from '../../components/ShowsComponents/Settings/Settings';
import Media from '../../components/ShowsComponents/Media/Media';
import Preview from '../../components/ShowsComponents/Preview/Preview';
import Export from '../../components/ShowsComponents/Export/Export';
import Surfaces from '../../components/StagesComponents/Surfaces/Surfaces';
import Screens from '../../components/StagesComponents/Screens/Screens';
import Stages from '../../components/StagesComponents/Stages/Stages';

import AddProjectModal from '../../components/Modals/AddProjectModal/AddProjectModal';
import AddFolderModal from '../../components/Modals/AddFolderModal/AddFolderModal';

import { getAccount } from '../../Redux/account/accountActions';
import { getTeams } from '../../Redux/team/teamActions';


function Home({ getAccount, getTeams, account }) {

    // This state is used to Show/ Hide the AddProjectModal
    const [showAddProjectModal, setShowAddProjectModal] = useState(false);
    // This state is used to set teamId
    const [teamId, setTeamId] = useState(null)
    // This state is used to Show/ Hide the AddFolderModal
    const [showAddFolderModal, setShowAddFolderModal] = useState(true);

    useEffect(() => {
        getAccount()
    }, [])

    // get team's by assing an accountId (show 1st project of first team by default)
    useEffect(() => {
        if (account) {
            let { account_id } = account
            getTeams(account_id[0]._id)

        }
    }, [account])

    // const [show, setShow] = useState(false);
    // const modalToggle = () => setShow(!show);

    // Function to close the Profile Dropdown whenever clicked outside it
    const closeModal = (event) => {
        const backDrop = document.querySelector(".modal__backDrop");
        const modal = document.querySelector(".modal");
        if (backDrop && event.target === backDrop && !event.target !== modal) {
            setShowAddProjectModal(false);
        }
    }

    useEffect(() => {
        // Listener to close the Profile Dropdown whenever clicked outside it
        const backDrop = document.querySelector(".modal__backDrop");
        backDrop.addEventListener('click', (e) => closeModal(e), false);

    }, []);


    // close add project modal

    const closeAddProjectModal = () => {
        setShowAddProjectModal(false);

    }
    // This Function is responsible to Show/ Hide the AddProjectModal
    const addProjectModalToggle = (e, teamId) => {
        setTeamId(teamId)
        // prevent parent component to render when open open a modal
        e.stopPropagation()
        if (showAddProjectModal) {
            // Allow to scroll when closing the modal
            document.body.style.removeProperty('overflow');

        } else {
            // Disable scrolling on the `body` element when opening a modal
            document.body.style.overflow = 'hidden';
        }

        setShowAddProjectModal(!showAddProjectModal);
    };

    // This Function is responsible to Show/ Hide the AddFolderModal
    const addFolderModalToggle = () => {

        if (showAddFolderModal) {
            // Allow to scroll when closing the modal
            document.body.style.removeProperty('overflow');

        } else {
            // Disable scrolling on the `body` element when opening a modal
            document.body.style.overflow = 'hidden';
        }

        setShowAddFolderModal(!showAddFolderModal);
    };

    /* Arrays To Pass The Sidebar Content In Props */
    let sidebarMenu1 = [
        { icon: 'fas fa-book', value: 'My Library' },
        { icon: 'far fa-file-alt', value: 'Shared with me' },
        { icon: 'fas fa-cog', value: 'Settings' }
    ];

    return (
        <div className="home page-wrapper">
            {/* Above "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

            <Sidebar menu1={sidebarMenu1}>
                <TeamsNav showAddProjectModal={showAddProjectModal} addProjectModalToggle={addProjectModalToggle} />
            </Sidebar>

            <div>
                <Header className="header" />

                {/* This is home's main tab which include Library, Shows & Stages */}
                <Tabs className="tabs">

                    {/* Library Tab Content */}
                    <div label="Library">
                        <Library addFolderModalToggle={addFolderModalToggle}/>
                    </div>

                    {/* Shows Tab Content */}
                    <div label="Shows">
                        <InnerTabs>
                            {/* Shows - Overview Tab Content */}
                            <div label="Overview">
                                <Overview />
                            </div>

                            {/* Shows - Settings Tab Content */}
                            <div label="Settings">
                                <Settings />
                            </div>

                            {/*Shows - Media Tab Content */}
                            <div label="Media">
                                <Media />
                            </div>

                            {/*Shows -  Preview Tab Content */}
                            <div label="Preview">
                                <Preview />
                            </div>

                            {/*Shows - Export Tab Content */}
                            <div label="Export">
                                <Export />
                            </div>
                        </InnerTabs>
                    </div>

                    {/* Stages Tab Content */}
                    <div label="Stages">
                        <InnerTabs>
                            {/* Stages - Surfaces Tab Content */}
                            <div label="Surfaces">
                                <Surfaces />
                            </div>

                            {/* Stages - Screens Tab Content */}
                            <div label="Screens">
                                <Screens />
                            </div>

                            {/*Stages - Stages Tab Content */}
                            <div label="Stages">
                                <Stages />
                            </div>
                        </InnerTabs>
                    </div>
                </Tabs>
            </div>

            {/* All The Modal Components Used In Home Page, All Its Tabs & Sidebar*/}

            {/* This is AddProjectModal */}
            <AddProjectModal showModal={showAddProjectModal} modalToggler={addProjectModalToggle} teamId={teamId} closeAddProjectModal={closeAddProjectModal} />

            {/* This is AddNewFolderModal */}
            <AddFolderModal showModal={showAddFolderModal} modalToggler={addFolderModalToggle} />

        </div>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account,
})

var mapDispatchToProps = {
    getAccount,
    getTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
