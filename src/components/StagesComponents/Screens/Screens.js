import React from 'react';
import './Screens.scss';

import MainTile1 from '../MainTile-1/MainTile-1';

function Screens() {
    return (
        <div className="screens">
            <div className="tileLayout">
                < div className="tileLayout__left" >
                    <div className="tileLayout__heading">This Is Tile Layout Heading</div>
                    <div className="tileLayout__mainContent">
                        <MainTile1 />
                    </div>
                </div>
                <div className="tileLayout__right">
                    <div className="tileLayout__rightSmallBox"></div>
                    <div className="tileLayout__rightSmallBox"></div>
                    <div className="tileLayout__rightSmallBox"></div>
                </div>
            </div >
        </div>
    )
}

export default Screens
