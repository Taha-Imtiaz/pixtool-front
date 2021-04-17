import React, { useState } from "react";
import { connect } from "react-redux";
import { getProject } from "../../Redux/project/projectActions";
import { deleteProject } from "../../Redux/account/accountActions";

import "./TeamsNav.scss";
import ReactTooltip from "react-tooltip";
import { Fragment } from "react";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const TeamsNav = ({
  addProjectModalToggle,
  getProject,
  account,
  deleteProject
}) => {
  // This state is used for toggling Sidebar Team Nav Lists
  const [teamItemIndex, setTeamItemIndex] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [projectToDelete, setProjectToDelete] = React.useState(null);

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

  const deleteP = () => {
    console.log(anchorEl)
  }
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
  let sidebarMenu1 = [
    { icon: "fas fa-book", value: "My Library" },
    { icon: "far fa-file-alt", value: "Shared with me" },
    { icon: "fas fa-cog", value: "Settings" },
  ];

  const [tooltipState, setToolTipState] = useState(false);
  const classes = useStyles();

  return (
    <div className="teamsNav">
      <ul className="teamsNav__list">
        {account &&
          account.map((account, index) => (
            <li key={account._id} className="teamsNav__item">
              <div
                className="teamsNav__item__head"
                onClick={() => toggleTeamNav(index)}
              >
                <div className="teamsNav__center">
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
                  <ul className="project__list">
                    {account.projects &&
                      account.projects.map((project, index) => (
                        <li key={project._id} className="project__item">
                          <span
                            className="project__item--name"
                            onClick={() => getProject(project._id)}
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
                    {/* {tooltipState && ( */}
                    {/* <ReactTooltip id="happyFace" place="bottom">
                        {sidebarMenu1.map((sidebarOption) => (
                          <Fragment>
                            <div className="teamPopOverMenu">
                              <div>
                                {" "}
                                <i
                                  className={sidebarOption.icon}
                                ></i>{" "}
                              </div>
                              <div>
                                <p>{sidebarOption.value}</p>
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </ReactTooltip> */}
                    {/* )} */}
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
                      {/* {sidebarMenu1.map((sidebarOption) => (
                        <Fragment>
                          <div className="teamPopOverMenu">
                            <div>
                              {" "}
                              <i
                                className={sidebarOption.icon}
                              ></i>{" "}
                            </div>
                            <div>
                              <p>{sidebarOption.value}</p>
                            </div>
                          </div>
                        </Fragment>
                      ))} */}
                      <Typography className={classes.typography}>
                        {/* <h3  >Add Member</h3> */}
                        <h3 onClick={() => deleteProject(projectToDelete, () => handleClose())}>Delete</h3>
                      </Typography>
                    </Popover>
                  </ul>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
var mapStateToProps = (state) => ({
  account: state.accounts && state.accounts.account,
});
var mapDispatchToProps = {
  getProject,
  deleteProject
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsNav);
