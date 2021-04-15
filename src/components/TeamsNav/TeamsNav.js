import React, { useState } from "react";
import { connect } from "react-redux";
import { getProject } from "../../Redux/project/projectActions";
import "./TeamsNav.scss";
import ReactTooltip from "react-tooltip";
import { Fragment } from "react";

const TeamsNav = ({
  addProjectModalToggle,
  getProject,
  account,
  
}) => {
  // This state is used for toggling Sidebar Team Nav Lists
  const [teamItemIndex, setTeamItemIndex] = useState(null);

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
                              onClick={() => setToolTipState(!tooltipState)}
                              onMouseEnter={() => setToolTipState(false)}
                            ></i>
                            {tooltipState && (
                              <ReactTooltip id="happyFace" place="bottom">
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
                              </ReactTooltip>
                            )}
                            {/* {showTeamDropdown ?
                                        <div className={`teamDropdown ${!showTeamDropdown ? "" : "teamDropdown-active"}`}>
                                            <ul >
                                                <li className="teamDropdown__listItem" ><span className="teamDropdown__listOption"><i className="fas fa-user-circle pd-r-1-5"></i> Account Settings</span></li>
                                                <li className="teamDropdown__listItem"><span className="teamDropdown__listOption"><i className="fas fa-headset pd-r-1-5"></i> Support FAQ</span></li>
                                                <li className="teamDropdown__listItem" ><span className="teamDropdown__listOption"><i className="fas fa-sign-out-alt pd-r-1-5"></i> Log out</span></li>
                                            </ul>
                                        </div>
                                        :
                                        null
                                    } */}
                          </span>
                        </li>
                      ))}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsNav);
