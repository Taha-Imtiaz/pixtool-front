import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Library.scss";

import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";

import { getProjectAssets, getProject } from "../../Redux/project/projectActions";
// import ThumbnailFolderCard from '../Cards/ThumbnailFolderCard/ThumbnailFolderCard';
import { uploadAsset } from "../../Redux/assets/assetActions";
import ThumbnailFolderCard from "../Cards/ThumbnailFolderCard/ThumbnailFolderCard";
import { withRouter } from "react-router-dom";
import NoDataFoundImg from "../../images/no-data-found.png"

const Library = ({
  resources,
  teams,
  getProject,
  uploadAsset,
  project,
  addFolderModalToggle,
  getProjectAssets,
  history,
  location,


}) => {
  var previousPath, currentPath
  // const lastLocation = useLastLocation();
  const createNew = () => { };
  let { pathname } = location

  useEffect(() => {
    currentPath = sessionStorage.setItem('currentPath', pathname)
    previousPath = sessionStorage.setItem('previousPath', '')
  }, [])

  


  useEffect(() => {
    if (project) {
      // this useeffect only runs if pathname changes (go back and forward)
      //check pathname when we goBack(pathname !== the path of the page from which we are coming)
      if (
        sessionStorage.getItem("path") &&
        pathname !== sessionStorage.getItem("path")
      ) {
        sessionStorage.setItem("path", pathname);

        let pathNameIdArray = pathname.split("/").slice(2, pathname.length);
        let pathNameIdArrayLength = pathNameIdArray.length;
        console.log(pathNameIdArrayLength)

        if (pathNameIdArrayLength === 2) { //we are on home page not any nested folder
          if (teams) {
            let { projects } = teams;
            getProject(projects[0]._id);
          }
        }
        else if (pathNameIdArrayLength === 3) {
          //   this else part runs only if we go back
          let assetObj = {
            status: "in_progress",
          }
          getProjectAssets(pathNameIdArray[1], assetObj)  /*pass asset id in argument   */
        }
      } else {
        sessionStorage.setItem("path", pathname);
      }
    }

  }, [pathname]);







  const handleVideoUpload = async (e) => {
    let { parentId } = project;

    if (e.target.files[0]) {
      let file = e.target.files[0];
      const cover = await getVideoCover(file, 1.5);

      // print out the result image blob
      const data = new FormData();
      data.append("files", file, file.name);
      data.append("files", cover, cover.name);
      data.append(
        "data",
        JSON.stringify({
          parent_id: parentId,
        })
      );

      uploadAsset(data);
    }
  };

  // Dropdown Option Values
  let newUpload = [
    {
      rightIcon: "",
      leftIcon: "",
      value: "File Upload",
      goToMenu: "",
      isUpload: {
        value: true,
        onUpload: handleVideoUpload,
      },
    },
    {
      rightIcon: "",
      leftIcon: "",
      value: "New Folder",
      goToMenu: "",
      isUpload: {
        value: false,
        modalToggler: addFolderModalToggle,
      },
    },
  ];

  const getVideoCover = (file, seekTo = 0.0) => {
    return new Promise((resolve, reject) => {
      // load the file to a video player
      const videoPlayer = document.createElement("video");
      videoPlayer.setAttribute("src", URL.createObjectURL(file));
      videoPlayer.load();
      videoPlayer.addEventListener("error", (ex) => {
        reject("error when loading video file", ex);
      });
      // load metadata of the video to get video duration and dimensions
      videoPlayer.addEventListener("loadedmetadata", () => {
        // seek to user defined timestamp (in seconds) if possible
        if (videoPlayer.duration < seekTo) {
          reject("video is too short.");
          return;
        }
        // delay seeking or else 'seeked' event won't fire on Safari
        setTimeout(() => {
          videoPlayer.currentTime = seekTo;
        }, 200);
        // extract video thumbnail once seeking is complete
        videoPlayer.addEventListener("seeked", () => {
          // define a canvas to have the same dimension as the video
          const canvas = document.createElement("canvas");
          canvas.width = videoPlayer.videoWidth;
          canvas.height = videoPlayer.videoHeight;
          // draw the video frame to canvas
          const ctx = canvas.getContext("2d");
          ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
          // return the canvas image as a blob
          ctx.canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/jpeg",
            0.75 /* quality */
          );
        });
      });
    });
  };

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
            {resources &&
              resources.length > 0 ?
              resources.map((resource) =>
                resource._type === "file" ? (
                  <ThumbnailCard
                    key={resource._id}
                    id={resource._id}
                    resource={resource}
                  />
                ) : (

                  <ThumbnailFolderCard key={resource._id} id={resource._id} resource={resource} />
                )
              ) : <img src={NoDataFoundImg} alt="No Data Found" className="margin-auto" />}
          </div>
        </div>
      </div>
    </div>
  );
};
var mapStateToProps = (state) => ({
  resources: state.project && state.project.resources,
  teams: state.teams && state.teams.teamList,
  project: state.project,
});
var mapDispatchToProps = {
  getProject,
  uploadAsset,
  getProjectAssets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Library));
