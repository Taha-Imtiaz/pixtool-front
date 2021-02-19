import React from 'react'
import './PlaylistCard.scss';
import VideoThumbnail from '../../../images/video-thumbnail.jpg';

function PlaylistCard() {
    return (
        <div className="playlistCard">
            <div className="playlistCard__text">
                <span className="playlistCard__text--count">1. &nbsp;</span>
                <span className="playlistCard__text--title">Faded by Alan Walker</span>
            </div>

            <div className="playlistCard__img">
                <img src={VideoThumbnail} alt="Video Thumbnail" className="playlistCard__Thumbnail" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="playlistCard__Thumbnail" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="playlistCard__Thumbnail" />
                <img src={VideoThumbnail} alt="Video Thumbnail" className="playlistCard__Thumbnail" />
            </div>

            <div className="playlistCard__allMedia">All Media</div>
        </div>
    )
}

export default PlaylistCard
