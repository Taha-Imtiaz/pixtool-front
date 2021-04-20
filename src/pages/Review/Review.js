import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import "./Review.scss";

import Header from "../../components/Header/Header";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";

// import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
// import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";

import NoDataFoundImg from "../../images/no-data-found.png";
import { getReviewAssets } from "../../Redux/review/reviewActions";

const Review = ({ user, reviewAssets, getReviewAssets, match:{params:{id}} ,location:{pathname} }) => {
  useEffect(() => {
    sessionStorage.setItem("currentUrl", pathname)
    // console.log(id)
    getReviewAssets(id)
  }, [])
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

          {reviewAssets &&
            (reviewAssets.length > 0 ? (
              reviewAssets.map((reviewAsset, index) =>
                reviewAsset._type === "file" ? (
                  <ThumbnailCard
                    // shareAssetIds={shareAssetIds}
                    // setAssetIds={setAssetIds}

                    key={reviewAsset._id}
                    id={reviewAsset._id}
                    resource={reviewAsset}
                  // showCheckbox={showCheckbox}
                  // index={index}
                  />
                ) : (
                  <ThumbnailFolderCard
                    key={reviewAsset._id}
                    id={reviewAsset._id}
                    resource={reviewAsset}
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
  reviewAssets: state.reviewAssets && state.reviewAssets.assets,
  user: state.users && state.users.user,
});
var mapDispatchToProps = {
  getReviewAssets
}
export default connect(mapStateToProps, mapDispatchToProps)(Review);
