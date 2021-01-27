import React from 'react';
import  './Media.scss';
import StagesThumbnailCard from '../../Cards/StagesThumbnailCard/StagesThumbnailCard';

function Media() {
    return (
        <div className="media">
            <StagesThumbnailCard />
            <StagesThumbnailCard />
            <StagesThumbnailCard />
            <StagesThumbnailCard />
            <StagesThumbnailCard />
            <StagesThumbnailCard />
        </div>
    )
}

export default Media
