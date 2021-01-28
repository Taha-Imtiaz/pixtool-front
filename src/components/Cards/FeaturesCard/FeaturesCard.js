import React from 'react';
import './FeaturesCard.scss'
import VideoCam2x from '../../../images/video-cam-2x.png';
// import VideoPlayer2x from '../../../images/video-player-2x.png';
// import Stage2x from '../../../images/stage-2x.png';

function FeaturesCard() {
    return (
        <div className="featuresCard">
            <div className="featuresCard__head">
                <span className="featuresCard__head--number">01</span>
                <img src={VideoCam2x} alt="Card Logo" className="featuresCard__head--img" />
                <span className="featuresCard__head--text">Video Editing</span>
            </div>

            <div className="featuresCard__content">
                <p className="featuresCard__content--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                <a className="featuresCard__content--link" href="./#">See More</a>
            </div>
        </div>
    )
}

export default FeaturesCard
