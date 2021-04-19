import React, {Fragment} from "react";
import { connect } from "react-redux";

import './Review.scss';

import Header from "../../components/Header/Header";
// import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
// import ThumbnailFolderCard from "../../components/Cards/ThumbnailFolderCard/ThumbnailFolderCard";

// import NoDataFoundImg from "../../images/no-data-found.png";


const Review = () => {


  return (
    <Fragment>
      <Header className="header" />
      <div className="review">

        <div className="review__gallery">

        </div>
      </div >
    </Fragment>
  );
};


var mapStateToProps = (state) => ({
  resources: state.project && state.project.resources,
});


export default connect(mapStateToProps)(Review);
