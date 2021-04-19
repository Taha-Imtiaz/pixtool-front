import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";
import Header from "../../components/Header/Header";
import NoDataFoundImg from "../../images/no-data-found.png";

const Review = ({ resources }) => {
  return (
    <Fragment>
      <Header className="header" />
      <div className="library">
        <div className="library__head">
          {/* <Filter /> */}
          <div className="library__head-right">
            <div className="avatar__container">
              <div className="avatar">
                {/* <i className="fas fa-user-plus"></i> */}
              </div>
              {/* <Avatar />
              <Avatar /> */}
            </div>

            <div className="library__head__buttons">
              {/* <Button text="Share" click={shareLibrary} />
              <Dropdown text="New" menuItems={newUpload} /> */}
            </div>
          </div>
        </div>


      <div className="library__main">
        <div className="thumbnail-container">
          {resources &&
            (resources.length > 0 ? (
              resources.map((resource, index) =>
                resource._type === "file" ? (
                  <ThumbnailCard
                  // shareAssetIds={shareAssetIds}
                  // setAssetIds={setAssetIds}

                  // key={resource._id}
                  // id={resource._id}
                  // resource={resource}
                  // showCheckbox={showCheckbox}
                  // index={index}
                  />
                ) : (
                  <ThumbnailFolderCard
                  // key={resource._id} id={resource._id} resource={resource} shareAssetIds={shareAssetIds} setAssetIds={setAssetIds} showCheckbox={showCheckbox}
                  />
                )
              )
            ) : (
              <img
                src={NoDataFoundImg}
                alt="No Data Found"
                className="margin-auto"
              />
            ))}
        </div>
      </div>
      </div>
    </Fragment>
  );
};
var mapStateToProps = (state) => ({
  resources: state.project && state.project.resources,
});

export default connect(mapStateToProps)(Review);
