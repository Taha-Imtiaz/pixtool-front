import React from 'react';
import './StagesThumbnailCardV2.scss';
import VideoThumbnail from '../../../images/video-thumbnail.jpg';

function StagesThumbnailCardV2() {
    return (
        <div className="stagesThumbnailCardV2">
            <div className="stagesThumbnailCardV2__text">
                <span className="stagesThumbnailCardV2__text--title">Faded by Alan Walker</span>
            </div>

            <div className="stagesThumbnailCardV2__img">
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnailV2" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnailV2" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnailV2" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnailV2" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnailV2" />
            </div>
        </div>
    )
}

export default StagesThumbnailCardV2
