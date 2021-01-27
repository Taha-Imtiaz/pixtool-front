import React from 'react';
import './StagesThumbnailCard.scss';
import VideoThumbnail from '../../../images/video-thumbnail.jpg';

function StagesThumbnailCard() {
    return (
        <div className="stagesThumbnailCard">
            <div className="stagesThumbnailCard__text">
                <span className="stagesThumbnailCard__text--title">Love Me Like You Do</span>
                <span className="stagesThumbnailCard__text--export">Export Media</span>
            </div>

            <div className="stagesThumbnailCard__img">
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnail"/>
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnail"/>
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnail"/>
                <img src={VideoThumbnail} alt="Video Thumbnail" className="stagesCardThumbnail"/>
                <div className="stagesCardThumbnail stagesCardThumbnail--addBtn"><i class="fas fa-plus-circle"></i></div>
            </div>
        </div>
    )
}

export default StagesThumbnailCard
