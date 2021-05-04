import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getProject, setProjectId } from "../../Redux/project/projectActions";
import { deleteProject } from "../../Redux/account/accountActions";

import "./TeamsNav.scss";

import ConfirmationModal from "../Modals/ConfirmationModal/ConfirmationModal";

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Fade, Modal } from '@material-ui/core';

// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const TeamsNav = ({
  addProjectModalToggle,
  getProject,
  account,
  projects,
  deleteProject,
  history,
  setProjectId
}) => {

  // This state is used for toggling Sidebar Team Nav Lists
  const [teamItemIndex, setTeamItemIndex] = useState(null);
  // This state is used for toggling Sidebar Team Nav My Library
  const [library, setLibrary] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [projectToDelete, setProjectToDelete] = React.useState(null);

  //This state is responsible for toggling Confirmation Modal
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = (event, id) => {
    setProjectToDelete(id)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const [showTeamDropdown, setShowTeamDropdown] = useState(false)

  // This Function is responsible for toggling Sidebar Team Nav Lists
  const toggleTeamNav = (index) => {
    if (index === teamItemIndex) {
      setTeamItemIndex(-1);
    }
    //    set the index of teamItem to the index of item which was clicked
    else {
      setTeamItemIndex(index);
    }
  };

  // const deleteP = () => {
  //   console.log(anchorEl)
  // }
  /* const toggleTeamDropdown = () => { setShowTeamDropdown(!showTeamDropdown) }

    // Function to close the Team Dropdown whenever clicked outside it
    const closeTeamDropdown = (event) => {
        // Get parent element and check if click happened outside parent only
        const parent = document.querySelector("project__item--icon-active");
        let teamDropdown = document.querySelector('.teamDropdown-active');

        if (parent && !parent.contains(event.target)) {
            teamDropdown.style.display = 'none';
        }
    }

    // To close the Team Dropdown whenever clicked outside it
    useEffect(() => {
        // Listener to close the Profile Dropdown whenever clicked outside it
        document.addEventListener('click', (e) => closeTeamDropdown(e), false);

    }, []); */
  // let sidebarMenu1 = [
  //   { icon: "fas fa-book", value: "My Library" },
  //   { icon: "far fa-file-alt", value: "Shared with me" },
  //   { icon: "fas fa-cog", value: "Settings" },
  // ];

  // const [tooltipState, setToolTipState] = useState(false);
  // this useEffect is used for highlighting 1st project by defaults
  useEffect(() => {
    if (projects) {

      if (sessionStorage.getItem("selectedProjectId") && sessionStorage.getItem("selectedProjectIndex")) {
        console.log(sessionStorage.getItem("selectedProjectId"), sessionStorage.getItem("selectedProjectIndex"))
        setSelectedProjectIndex(parseInt(sessionStorage.getItem("selectedProjectIndex")))
        // getProject(sessionStorage.getItem("selectedProjectId"))
        setProjectId(sessionStorage.getItem("selectedProjectId"))
        // history.push(`/home/library/${sessionStorage.getItem("selectedProjectId")}`)
      } else {
        setSelectedProjectIndex(0)
        // getProject(projects[0]._id)
        setProjectId(projects[0]._id)
        sessionStorage.setItem("selectedProjectId", projects[0]._id)
        sessionStorage.setItem("selectedProjectIndex", 0)
        // history.push(`/home/library/${projects[0]._id}`)

      }
    }

  }, [projects])

  const [openModal, setOpen] = useState(false);

  // this state is for selected Project
  const [selectedProject, setSelectedProject] = useState(false)

  // this state is for selected Project Id
  const [selectedProjectIndex, setSelectedProjectIndex] = useState('')

  const classes = useStyles();

  const handleClickOpen = () => {
    setShowConfirm(true);
    handleClose();
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const highlightSelectedProject = (projectId, index) => {
    console.log(projectId, index)
    setSelectedProjectIndex(index)
    sessionStorage.setItem("selectedProjectId", projectId)
    sessionStorage.setItem("selectedProjectIndex", index)
    history.push(`/home/library/${projectId}`)
  }

  return (
    <Fragment>
      <div className="teamsNav">
        <ul className="teamsNav__list">
          {account &&
            account.map((account, index) => (
              <li key={account._id} className="teamsNav__item" >
                <div
                  className="teamsNav__item__head"
                  onClick={() => toggleTeamNav(index)}
                >
                  <div className="teamsNav__center" >
                    <span className="teamsNav__icon">
                      {index === teamItemIndex ? (
                        <i className="fas fa-chevron-down"></i>
                      ) : (
                        <i className="fas fa-chevron-right"></i>
                      )}
                    </span>

                    <span
                      className="teamsNav__text truncate"
                      title={account.name}
                    >
                      {account.name}
                    </span>
                    <span className="teamsNav__addBtn">
                      <i
                        className="fas fa-plus-circle"
                        onClick={(e) => addProjectModalToggle(e, account._id)}
                      ></i>
                    </span>
                  </div>
                </div>

                {index === teamItemIndex && (
                  <div className="teamsNav__item__body">
                    <div>
                      <div className="project__item" onClick={() => { setLibrary(!library) }}>
                        <i className="fas fa-book"></i>
                        <span className="project__item--name">My Library</span>
                        {library ? (
                          <i className="fas fa-chevron-down"></i>
                        ) : (
                          <i className="fas fa-chevron-right"></i>
                        )}
                      </div>

                      {library ?
                        <ul className="project__list">
                          {account.projects &&
                            account.projects.map((project, index) => (
                              <li key={project._id} className={index === selectedProjectIndex ? "project__item project__highlight" : "project__item"} >
                                <span
                                  className="project__item--name"
                                  // onClick={() => getProject(project._id)}
                                  onClick={() => highlightSelectedProject(project._id, index)}
                                >
                                  {project.name}
                                </span>
                                <span className="project__item--icon">
                                  <i
                                    data-tip
                                    data-for="happyFace"
                                    className="fas fa-ellipsis-v"
                                    // onClick={() => setToolTipState(!tooltipState)}
                                    // onMouseEnter={() => setToolTipState(false)}
                                    onClick={(e) => handleClick(e, project._id)}
                                  ></i>
                                </span>
                              </li>
                            ))}
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                          >
                            <Typography className={classes.typography}>
                              {account.projects.length > 1 ? <h3 className="contextualMenu__heading" onClick={() => handleClickOpen()}>Delete</h3> : null}
                              <h3 className="contextualMenu__heading" >Settings</h3>
                              <h3 className="contextualMenu__heading" >Share</h3>
                            </Typography>
                          </Popover>
                        </ul>
                        :
                        null
                      }
                    </div>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* <Dialog
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog"
      >
        <DialogTitle id="alert-dialog-title" className="dialog__title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="dialog__text">
            Are you sure you want to delete this project?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
          <Button onClick={() => deleteProject(projectToDelete, () => handleModalClose())} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog> */}

      <Modal
        className="modal"
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showConfirm}>
          <div >
            <ConfirmationModal show={showConfirm} setShow={setShowConfirm} itemName="project" confirmFunc={() => deleteProject(projectToDelete, () => handleModalClose())} />
          </div>
        </Fade>
      </Modal>

    </Fragment >
  );
};


var mapStateToProps = (state) => ({
  account: state.accounts && state.accounts.account,
  projects: state.accounts && state.accounts.account[0] && state.accounts.account[0].projects
});
var mapDispatchToProps = {
  getProject,
  deleteProject,
  setProjectId
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TeamsNav));
