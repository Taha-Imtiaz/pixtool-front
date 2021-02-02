import React from 'react';
import './Preview.scss';
import WallStageLargeCard from '../../Cards/WallStageLargeCard/WallStageLargeCard';
import StagesThumbnailCardV2 from '../../Cards/StagesThumbnailCardV2/StagesThumbnailCardV2';

function Preview() {
    return (
        <div className="preview">
            <div className="preview__content--1">
                <WallStageLargeCard />
            </div>
            <div className="preview__content--2">
                <StagesThumbnailCardV2 />
                <StagesThumbnailCardV2 />
            </div>
        </div>
    )
}

export default Preview