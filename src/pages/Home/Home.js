import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./Home.scss";

import Tabs from "../../components/NavigationTabs/Tabs";
import InnerTabs from "../../components/InnerNav/InnerTabs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import TeamsNav from "../../components/TeamsNav/TeamsNav";
import Library from "../../components/Library/Library";
import Overview from "../../components/ShowsComponents/Overview/Overview";
import Settings from "../../components/ShowsComponents/Settings/Settings";
import Media from "../../components/ShowsComponents/Media/Media";
import Preview from "../../components/ShowsComponents/Preview/Preview";
import Export from "../../components/ShowsComponents/Export/Export";
import Surfaces from "../../components/StagesComponents/Surfaces/Surfaces";
import Screens from "../../components/StagesComponents/Screens/Screens";
import Stages from "../../components/StagesComponents/Stages/Stages";

// Modal Imports
import AddProjectModal from "../../components/Modals/AddProjectModal/AddProjectModal";
import AddFolderModal from "../../components/Modals/AddFolderModal/AddFolderModal";
import ShareModal from "../../components/Modals/ShareModal/ShareModal";
import ProjectOptionsModal from "../../components/Modals/ProjectOptionsModal/ProjectOptionsModal";

import { Fragment } from "react";
import { getTeamData } from "../../Redux/team/teamActions";
import { getProject } from "../../Redux/project/projectActions";

function Home({ project, match: { path }, getTeamData, getProject,location:{pathname} , account}) {
  // console.log(path)
  // This state is used to set teamId
  const [teamId, setTeamId] = useState(null);

  // This state is used to Show/ Hide the AddProjectModal
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  // This state is used to Show/ Hide the AddFolderModal
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  // This state is used to Show/ Hide the ShareModal
  const [showShareModal, setShowShareModal] = useState(false);
  // This state is used to Show/ Hide ProjectOptionsModal
  const [showProjectMenu, setShowProjectMenu] = useState(false);

  // This is State is used to Show/ Hide the Share Checkbox On ThumbnailCard
  const [showCheckbox, setShowCheckbox] = useState(false);

  // This Function is responsible to Show/ Hide the AddProjectModal
  const addProjectModalToggle = (e, teamId) => {
    setTeamId(teamId);
    // prevent parent component to render when open open a modal
    e.stopPropagation();
    if (showAddProjectModal) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowAddProjectModal(!showAddProjectModal);
  };

  // This Function is responsible to Show/ Hide the AddFolderModal
  const addFolderModalToggle = () => {
    if (showAddFolderModal) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowAddFolderModal(!showAddFolderModal);
  };

  // This Function is responsible to Show/ Hide the ShareModal
  const shareModalToggle = () => {
    if (showShareModal) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowShareModal(!showShareModal);
  };

  // This Function is responsible to Show/ Hide the ProjectOptionsModal
  const projectOptionsModalToggle = () => {
    if (showProjectMenu) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowProjectMenu(false);
  };

  /* Arrays To Pass The Sidebar Content In Props */
  let sidebarMenu1 = [
    { icon: "fas fa-book", value: "My Library" },
    { icon: "far fa-file-alt", value: "Shared with me" },
    { icon: "fas fa-cog", value: "Settings" },
  ];
  useEffect(() => {
    if (account) {

      // get all projects of first team
      let { projects, _id } = account[0];
      // console.log(pathname);
      // we extract _id from account[0] means first team
      
      if (projects) {

        getTeamData(_id, projects[0]._id, () => {
          getProject(projects[0]._id);
        })


      }
      sessionStorage.setItem("currentUrl", pathname)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [account]);

  return (
    <div className="home page-wrapper">
      {/* Above "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

      <Sidebar menu1={sidebarMenu1}>
        <TeamsNav
          showAddProjectModal={showAddProjectModal}
          addProjectModalToggle={addProjectModalToggle}
          showProjectMenu={showProjectMenu}
          setShowProjectMenu={setShowProjectMenu}
        />
      </Sidebar>

      <div>
        <Header className="header" />

        {/* This is home's main tab which include Library, Shows & Stages */}
        {project && (
          // <Tabs className="tabs">
          // </Tabs>

          //  <Switch>
          <Fragment>
            <Route path={`${path}/`} render={() => <Redirect to={`${path}/library/${project._id}`} />} exact />
            <Route path={`${path}/library/:id`} label="Library" component={Library} />
            {/* <Library
                  addFolderModalToggle={addFolderModalToggle}
                  shareModalToggle={shareModalToggle}
                  showCheckbox={showCheckbox}
                  setShowCheckbox={setShowCheckbox}
                /> */}
            {/* </Route> */}
            <Route path={`${path}/shows/${project._id}`} label="Shows">
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
            </Route>
            <Route path={`${path}/stages/${project._id}`} label="Stages">
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
            </Route>
          </Fragment>
          // </Switch>
        )}
      </div>

      {/* All The Modal Components Used In Home Page, All It's Tabs & Sidebar*/}

      {/* This is AddProjectModal */}
      <AddProjectModal
        showModal={showAddProjectModal}
        setShowModal={setShowAddProjectModal}
        modalToggler={addProjectModalToggle}
        teamId={teamId}
      />

      {/* This is AddNewFolderModal */}
      <AddFolderModal
        showModal={showAddFolderModal}
        setShowModal={setShowAddFolderModal}
        modalToggler={addFolderModalToggle}
      />

      {/* This is ShareModal */}
      <ShareModal
        showModal={showShareModal}
        setShowModal={setShowShareModal}
        modalToggler={shareModalToggle}
      />

      {/* This is ProjectOptionsModal */}
      <ProjectOptionsModal
        showModal={showProjectMenu}
        setShowModal={setShowProjectMenu}
        modalToggler={projectOptionsModalToggle}
      />
    </div>
  );
}

var mapStateToProps = (state) => ({
  project: state.project,
  account: state.accounts && state.accounts.account,
});
var mapDispatchToProps = {
  getTeamData,
  getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
