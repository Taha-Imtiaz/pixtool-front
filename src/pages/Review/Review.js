import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./Review.scss";

import Header from "../../components/Header/Header";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";
// import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
// import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";

import NoDataFoundImg from "../../images/no-data-found.png";

const Review = ({ user, resources }) => {
  return (
    <Fragment>
      <Header className="header" />
      <div className="review">
        <div className="review__header">
          <h3>{`Review Link ${new Date().toDateString()}`} </h3>
          {user && (
            <h3 className="review__header__username">{`Shared By ${user.full_name}`}</h3>
          )}
          <div className="review__header__horizontal-line"></div>
        </div>

        <div className="review__gallery">
            
          {resources &&
            (resources.length > 0 ? (
              resources.map((resource, index) =>
                resource._type === "file" ? (
                  <ThumbnailCard
                  // shareAssetIds={shareAssetIds}
                  // setAssetIds={setAssetIds}

                  key={resource._id}
                  id={resource._id}
                  resource={resource}
                  // showCheckbox={showCheckbox}
                  // index={index}
                  />
                ) : (
                  <ThumbnailFolderCard
                    key={resource._id}
                    id={resource._id}
                    resource={resource}
                    // shareAssetIds={shareAssetIds}
                    // setAssetIds={setAssetIds}
                    // showCheckbox={showCheckbox}
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
    </Fragment>
  );
};

var mapStateToProps = (state) => ({
  resources: state.project && state.project.resources,
  user: state.users && state.users.user,
});

export default connect(mapStateToProps)(Review);
