import React, { useEffect, useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
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
import { getTeam } from "../../Redux/team/teamActions";
import { getProject } from "../../Redux/project/projectActions";
import AddTeamModal from "../../components/Modals/AddTeamModal/AddTeamModal";
import { Backdrop, Fade, Modal } from "@material-ui/core";

function Home({ projectId, match: { path }, getTeam, getProject, location: { pathname }, account }) {
  // console.log(assetId)
  // This state is used to set teamId
  const [teamId, setTeamId] = useState(null);

  // This state is used to Show/ Hide the AddProjectModal
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  // This state is used to Show/ Hide the AddFolderModal
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  // This state is used to Show/ Hide the AddTeamModal
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);


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
  // This Function is responsible to Show/ Hide the AddFolderModal
  const addTeamModalToggle = () => {
    if (showAddTeamModal) {
      // Allow to scroll when closing the modal
      document.body.style.removeProperty("overflow");
    } else {
      // Disable scrolling on the `body` element when opening a modal
      document.body.style.overflow = "hidden";
    }

    setShowAddTeamModal(!showAddTeamModal);
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
      // let { projects, _id } = account[0];
      // console.log(pathname);
      // we extract _id from account[0] means first team

      // if (projects) {

      //   getTeam(_id, projects[0]._id, () => {

      //     sessionStorage.getItem("selectedProjectId") && getProject(sessionStorage.getItem("selectedProjectId"));
      //   })


      // }
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
        {projectId && (
          // <Tabs className="tabs">
          // </Tabs>


          <Fragment>
            <Link to={`${path}/library/${projectId}`}>Library</Link>
            <Link to={`${path}/shows/${projectId}`}>Stages</Link>
            <Link to={`${path}/stages/${projectId}`}>Shows</Link>

            <Switch>
              <Route path={`${path}/`} render={() => <Redirect to={`${path}/library/${projectId}`} />} exact />
              <Route path={`${path}/library/:projectId/:assetId?`} label="Library" render={(props) =>
                <Library {...props}
                  addFolderModalToggle={addFolderModalToggle}
                  shareModalToggle={shareModalToggle}
                  addTeamModalToggle={addTeamModalToggle}
                  showCheckbox={showCheckbox}
                  setShowCheckbox={setShowCheckbox} />} />

              <Route path={`${path}/shows/${projectId}`} label="Shows">
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
              <Route path={`${path}/stages/${projectId}`} label="Stages">
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
            </Switch>
          </Fragment>

        )}
      </div>

      {/* All The Modal Components Used In Home Page, All It's Tabs & Sidebar*/}

      {/* This is AddProjectModal */}
      {/* <AddProjectModal
        showModal={showAddProjectModal}
        setShowModal={setShowAddProjectModal}
        modalToggler={addProjectModalToggle}
        teamId={teamId}
      /> */}
      <Modal
        className="modal"
        // className={classes.modal}
        open={showAddProjectModal}
        onClose={() => setShowAddProjectModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showAddProjectModal}>
          <div >
            <AddProjectModal
              showModal={showAddProjectModal}
              setShowModal={setShowAddProjectModal}
              modalToggler={addProjectModalToggle}
              teamId={teamId}
            />
          </div>

        </Fade>
      </Modal>

      {/* This is AddNewFolderModal */}
      {/* <AddFolderModal
        showModal={showAddFolderModal}
        setShowModal={setShowAddFolderModal}
        modalToggler={addFolderModalToggle}
      
      /> */}
      <Modal
        className="modal"
        // className={classes.modal}
        open={showAddFolderModal}
        onClose={() => setShowAddFolderModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showAddFolderModal}>
          <div >
            <AddFolderModal
              showModal={showAddFolderModal}
              setShowModal={setShowAddFolderModal}
              modalToggler={addFolderModalToggle}

            />
          </div>

        </Fade>
      </Modal>

     

     
      <Modal
        className="modal"
        // className={classes.modal}
        open={showAddTeamModal}
        onClose={() => setShowAddTeamModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showAddTeamModal}>
          <div >
            <AddTeamModal
              showModal={showAddTeamModal}
              setShowModal={setShowAddTeamModal}
              modalToggler={addTeamModalToggle} />
          </div>

        </Fade>
      </Modal>

      {/* <AddTeamModal
        showModal={showAddTeamModal}
        setShowModal={setShowAddTeamModal}
        modalToggler={addTeamModalToggle}/> */}

     
      <Modal
        className="modal"
        // className={classes.modal}
        open={showShareModal}
        onClose={() => setShowShareModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showShareModal}>
          <div >
          <ShareModal
        showModal={showShareModal}
        setShowModal={setShowShareModal}
        modalToggler={shareModalToggle}
      />
          </div>

        </Fade>
      </Modal>
       {/* This is ShareModal */}
      {/* <ShareModal
        showModal={showShareModal}
        setShowModal={setShowShareModal}
        modalToggler={shareModalToggle}
      /> */}
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
  projectId: state.project && state.project.projectId,
  account: state.accounts && state.accounts.account,
});
var mapDispatchToProps = {
  getTeam,
  getProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
