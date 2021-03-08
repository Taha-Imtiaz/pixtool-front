import React from 'react';
import './MainTile-1.scss';

import TileImg from '../../../images/tile.svg';
// import ButtonSmall from '../../Button/Button';
import TwoWayArrow from '../../../images/twoWayArrow.svg';
import TwoWayArrowVert from '../../../images/twoWayArrow_vertical.svg';

function MainTile() {
    return (
        <div className="mainTile-1">
            <div className="mainTile-1__heightBox">
                <div className="mainTile-1__text mainTile-1__text--vertical">
                    Height:&nbsp;
                    <span className="mainTile-1__text--primary">250px</span>
                </div>
                <img src={TwoWayArrowVert} alt="Two Way Pointing Arrow" className="mainTile-1__arrow mainTile-1__arrow--vertical"></img>
            </div>

            <div className="mainTile-1__imgBox">
                <img src={TileImg} alt="Tile" className="mainTile-1__img" />
            </div>

            <div className="mainTile-1__widthBox">
                <div className="mainTile-1__text">
                    Width:&nbsp;
                    <span className="mainTile-1__text--primary">250px</span>
                </div>
                <img src={TwoWayArrow} alt="Two Way Pointing Arrow" className="mainTile-1__arrow"></img>
            </div>
        </div>
    )
}

export default MainTile
