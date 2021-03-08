import React from 'react';
import './Screens.scss';

import MainTile1 from '../MainTile-1/MainTile-1';
import ButtonSmallPrimary from '../../Button/ButtonSmallPrimary';

import TileImg from '../../../images/tile.svg'
import TileImg2 from '../../../images/tile2.svg'

function Screens() {
    const createNew = () => { }

    return (
        <div className="screens">
            <div className="selectTiles">
                <div className="selectTiles__heading">Select Tiles</div>
                <div className="selectTiles__content">
                    <div className="tileBox">
                        <img src={TileImg} alt="Tile" className="tileBox__img"/>
                        <span className="tileBox__text">Tile 01</span>
                        <span className="tileBox__text">2 * 2</span>
                    </div>
                    <div className="tileBox">
                        <img src={TileImg} alt="Tile" className="tileBox__img"/>
                        <span className="tileBox__text">Tile 01</span>
                        <span className="tileBox__text">2 * 2</span>
                    </div>
                    <div className="tileBox">
                        <img src={TileImg} alt="Tile" className="tileBox__img"/>
                        <span className="tileBox__text">Tile 01</span>
                        <span className="tileBox__text">2 * 2</span>
                    </div>
                    <div className="tileBox">
                        <img src={TileImg} alt="Tile" className="tileBox__img"/>
                        <span className="tileBox__text">Tile 01</span>
                        <span className="tileBox__text">2 * 2</span>
                    </div>
                    <div className="tileBox">
                        <img src={TileImg} alt="Tile" className="tileBox__img"/>
                        <span className="tileBox__text">Tile 01</span>
                        <span className="tileBox__text">2 * 2</span>
                    </div>
                </div>
            </div>
            <div className="tileLayout">
                < div className="tileLayout__left" >
                    <div className="tileLayout__heading">This Is Tile Layout Heading</div>
                    <div className="tileLayout__mainContent">
                        <MainTile1 image={TileImg2} />
                    </div>
                </div>
                <div className="tileLayout__right">
                    <div className="rightBox">
                        <h3 className="rightBox__heading">Stage</h3>
                        {/* Table Tag Will Be Repeated */}
                        <table className="rightBox__table">
                            <tbody>
                                <tr className="table__row">
                                    <td className="table__text pd-b-1">Main Wall: </td>
                                    <td className="table__text table__text--primary">84PX</td>
                                </tr>
                                <tr className="table__row pd-b-1">
                                    <td className="table__img  table__img--2">
                                        <img src={TileImg2} alt="Tile Thumbnail" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="rightBox__btn pd-t-1-5">
                            <ButtonSmallPrimary text="Add" click={createNew} />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Screens
