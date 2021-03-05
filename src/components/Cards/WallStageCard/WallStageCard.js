import React from 'react';
import './WallStageCard.scss';
import WallStage from '../../../images/Icon metro-table.png';

function WallStageCard() {
    return (
        <div className="wallStageCard">
            <span className="wallStageCard__check">
                <input type="checkBox" className="checkbox" />
            </span>
            <div className="wallStageCard__img">
                <img src={WallStage} alt="Wall Stage" />
            </div>
            <div className="wallStageCard__title">
                Wall Stage
            </div>
        </div>
    )
}

export default WallStageCard
