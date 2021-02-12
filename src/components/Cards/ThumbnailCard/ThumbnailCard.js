import React from 'react';
import './ThumbnailCard.scss';
import Thumbnail from '../../../images/thumbnail.jpg'

function ThumbnailCard() {

    const linkToPost = ()=> {
        window.location.assign('/player')
    }

    return (
        <div className="thumbnailCard" onClick={linkToPost}>
            <div className="thumbnailCard__status">
                Needs Approval
            </div>
            <div className="thumbnailCard__img">
                <img src={Thumbnail} alt="Thumbnail"/>
            </div>
            <div className="thumbnailCard__text">
                <div className="thumbnailCard__name">Best Samsung Mobile.mp4</div>
                <div className="thumbnailCard__datail">
                    <span>John</span>
                    &nbsp;-&nbsp;
                    <span>01 Jan 2021</span>
                </div>
            </div>
        </div>
    )
}

export default ThumbnailCard
