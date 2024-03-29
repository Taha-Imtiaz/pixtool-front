import { React, useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getLink, uploadAsset } from "../../Redux/assets/assetActions";
import { getProjectAssets, getProject } from "../../Redux/project/projectActions";

import "./Library.scss";

import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import ThumbnailFolderCard from "../Cards/ThumbnailFolderCard/ThumbnailFolderCard";

import NoDataFoundImg from "../../images/no-data-found.png"

const Library = ({
  resources,
  teams,
  getProject,
  teamMembers,

  uploadAsset,
  project,
  addFolderModalToggle,
  shareModalToggle,
  getProjectAssets,
  history,
  addTeamModalToggle,
  location,
  getLink,
  showCheckbox,
  setShowCheckbox,
}) => {

console.log(teamMembers)
  // State To Toggle Bottom Share Bar
  const [showShareBar, setShowShareBar] = useState(false)
  const [shareAssetIds, setShareAssetIds] = useState([])

  // state for checkbox
  //  const [checkBoxState, setCheckBoxState] = useState('')

  // var previousPath, currentPath
  let { pathname } = location


  // useEffect(() => {
  //   currentPath = sessionStorage.setItem('currentPath', pathname)
  //   previousPath = sessionStorage.setItem('previousPath', '')
  // }, [])
  const { projectId, assetId } = useParams();


  useEffect(() => {
    let sessionPath = sessionStorage.getItem("path")
    console.log(projectId, assetId, sessionPath, pathname)
    if (project) {
      console.log('Inside')
      // this useeffect only runs if pathname changes (go back and forward)
      //check pathname when we goBack(pathname !== the path of the page from which we are coming)
      // if (
      //   sessionPath
      // ) {
      //   sessionStorage.setItem("path", pathname);
      // }
      // else {
      //   sessionStorage.setItem("path", pathname);
      // }


      // if (projectId && assetId === undefined) { //we are on home page not any nested folder
      //   console.log('Get Project')
      //   if (teams) {
      //     let { projects } = teams;
      //   if(projects) {
      //     console.log(projects)
      //     console.log(sessionStorage.getItem("selectedProjectId"))
      //     getProject( sessionStorage.getItem("selectedProjectId") ? sessionStorage.getItem("selectedProjectId") : projects[0]._id);
      //   }
      //   }
      // }


      console.log(projectId, assetId)
      console.log('Get Project Assets')
      let assetObj = {
        filters: {
          status: "all",
        }
      }
      getProjectAssets(assetId ? assetId : projectId, assetObj)  /*pass asset id in argument   */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, projectId]);

  // useEffect(() => {
  //   if (projectId) {
  //     console.log(projectId)
  //     let assetObj = {
  //       filters: {
  //         status: "all",
  //       }
  //     }
  //     getProjectAssets(projectId, assetObj)
  //   }

  // }, [projectId])

  const handleVideoUpload = async (e) => {

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
          parent_id: assetId ? assetId : projectId,
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

  // Function To Enable Share Library
  const shareLibrary = () => {
    // setShowCheckbox(!showCheckbox);
    let temp = !showShareBar;
    setShowShareBar(temp);
    console.log(showShareBar)

    if (temp === true) {

      setShowCheckbox(true);
      let ids = project.resources.map(x => x._id)
      console.log(ids)
      setShareAssetIds(ids)
    }
    else {
      setShowCheckbox(false);
      setShareAssetIds([])
    }
  }

  const setAssetIds = (id) => {

    let arr = shareAssetIds.slice();
    let index = shareAssetIds.findIndex(x => id === x)

    if (index !== -1) {
      arr.splice(index, 1)
      setShareAssetIds(arr)
      console.log(arr)

    } else {
      arr.push(id)
      setShareAssetIds(arr)
      console.log(arr)

    }
  }
  const shareLink = () => {
    if (shareAssetIds.length > 0) {
      let assetIdObj = {
        asset_ids: shareAssetIds
      }
      getLink(assetIdObj)
      shareModalToggle()
    }
  }

  const clickFileUpload = () => {
    document.getElementById('fileUploadInput').click();
  }


  return (
      <div className="library">
        <div className="library__head">
          <Filter />
          <div className="library__head-right">
            <div className="avatar__container">
              <div className="avatar">
                <i className="fas fa-user-plus" onClick={() => addTeamModalToggle()}></i>
              </div>
              {/* <Avatar />
              <Avatar /> */}
              {teamMembers.map((member) => {
                let {images:{img_32}} = member
                console.log(img_32)
                return <img src = {img_32} className = "image" alt = ""/>
              })}
            </div>

            <div className="library__head__buttons">
              <Button text="Share" click={shareLibrary} />
              <Dropdown text="New" menuItems={newUpload} />
            </div>
          </div>
        </div>

        <div className="library__main">
          <div className="thumbnail-container">
            {resources && (resources.length > 0 ?
              resources.map((resource, index) =>
                resource._type === "file" ? (
                  <ThumbnailCard
                    shareAssetIds={shareAssetIds}
                    setAssetIds={setAssetIds}

                    key={resource._id}
                    resourceId={resource._id}
                    resource={resource}
                    showCheckbox={showCheckbox}
                    index={index}

                  />
                )
                  :
                  (
                    <ThumbnailFolderCard key={resource._id} resourceId={resource._id} resource={resource} shareAssetIds={shareAssetIds} setAssetIds={setAssetIds} showCheckbox={showCheckbox} />
                  )
              )
              :
              <div className="noDataFound">
                <img src={NoDataFoundImg} alt="No Data Found" className="noDataFound__img" />
                <div className="txt-align-center">
                  <p className="noDataFound__text noDataFound__text--primary">Folder is empty!</p>
                  <p className="noDataFound__text">Upload files to begin.</p>
                </div>
                <input id="fileUploadInput" type="file" className="dropdown__uploadInput inputTag" onChange={(e) => handleVideoUpload(e)} accept="video/*" />
                <Button text="Upload Files" click={clickFileUpload} />
              </div>
            )
            }
          </div>
        </div>
        
        {showShareBar ?
          <div className="shareBar">
            <div className="shareBar__selectedItems">{shareAssetIds.length} Items Selected</div>
            <div className="shareBar__btns">
              <Button text="Cancel" click={shareLibrary} />
              <Button text="Share" click={shareLink} />
            </div>
          </div>
          :
          null
        }
      </div>
  );
};


var mapStateToProps = (state) => ({
  resources: state.project && state.project.resources,
  teams: state.teams && state.teams.teamList,
  project: state.project,
  teamMembers: state.accounts && state.accounts.account && state.accounts.account[0] && state.accounts.account[0].members

});
var mapDispatchToProps = {
  getProject,
  uploadAsset,
  getProjectAssets,
  getLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Library));
