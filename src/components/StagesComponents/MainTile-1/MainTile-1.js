import { React, useEffect } from 'react';
import './MainTile-1.scss';

// import TileImg from '../../../images/tile.svg';
// import ButtonSmall from '../../Button/Button';
import TwoWayArrow from '../../../images/twoWayArrow.svg';
import TwoWayArrowVert from '../../../images/twoWayArrow_vertical.svg';

function MainTile(props) {

    // Function To Set The Height Of Vertical Arrow To That Of Image In MainTile-1
    const setVertArrowHeight = () => {
        setTimeout(() => {
            // To Set The Height Of Vertical Arrow To That Of Image
            let vertArrow = document.getElementById('vertArrow');
            let imgHeight = (document.getElementById('image').offsetHeight + 20).toString();
            if (vertArrow && imgHeight) {
                vertArrow.style.height = (imgHeight + 'px');
            }
        });
    }

    useEffect(() => {
        // To Set The Height Of Vertical Arrow To That Of Image
        window.addEventListener('load', setVertArrowHeight, false);
        window.addEventListener('click', setVertArrowHeight, false);
    }, [])

    return (
        <div className="mainTile-1">
            <div className="mainTile-1__heightBox">
                <div className="mainTile-1__text mainTile-1__text--vertical">
                    Height:&nbsp;
                    <span className="mainTile-1__text--primary">250px</span>
                </div>
                <img src={TwoWayArrowVert} alt="Two Way Pointing Arrow" id="vertArrow" className="mainTile-1__arrow mainTile-1__arrow--vertical"></img>
            </div>

            <div className="mainTile-1__imgBox">
                <img src={props.image} alt="Tile" id="image" className="mainTile-1__img" />
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
