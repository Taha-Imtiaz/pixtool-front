import React from 'react';
import './Tiles.scss';
import TileImg from '../../images/tile.svg';
import ButtonSmall from '../Button/Button';
import TwoWayArrow from '../../images/twoWayArrow.svg';

function Tiles() {
    const createNew = () => { }

    return (
        <div className="tiles">
            <div className="tiles__left">
                <h3 className="tiles__title">Tile 01</h3>
                <div className="tiles__left--content">
                    <div className="tiles__grid">
                        <div className="tiles__left-arrow">
                            <span className="tiles__text">
                                Height:&nbsp;
                                <span className="tiles__text--primary">250px</span>
                            </span>
                            <img src={TwoWayArrow} alt="Two Way Pointing Arrow" className="tiles__arrow"></img>
                        </div>

                        <div className="tiles__img-box">
                            <img src={TileImg} alt="Tile" className="tiles__img" />
                        </div>

                        <div className="tiles__right-arrow">
                            <span className="tiles__text">
                                Width:&nbsp;
                                <span className="tiles__text--primary">250px</span>
                            </span>
                            <img src={TwoWayArrow} alt="Two Way Pointing Arrow" className="tiles__arrow"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiles__right">
                <div className="infoTiles">
                    <h4 className="infoTiles__heading">Details</h4>
                    <div className="infoTiles__content">
                        <span className="tiles__text tiles__text--flex">
                            Pixel Pitch:&nbsp;
                            <span className="tiles__text--primary">84PX</span>
                        </span>
                        <span className="tiles__text tiles__text--flex">
                            Cabinet Size:&nbsp;
                            <span className="tiles__text--primary">20 * 20</span>
                        </span>
                        <span className="tiles__text tiles__text--flex">
                            Pixel Size:&nbsp;
                            <span className="tiles__text--primary">84PX</span>
                        </span>
                    </div>
                </div>
                <div className="infoTiles">
                    <h4 className="infoTiles__heading">Screen</h4>
                    <div className="infoTiles__content">
                        <span className="tiles__text tiles__text--flex">
                            <img src={TileImg} alt="Tile" className="tiles__img--small" />&nbsp;
                            <span className="tiles__text--primary">20 * 20</span>
                        </span>
                        <span className="tiles__text tiles__text--flex">
                            <img src={TileImg} alt="Tile" className="tiles__img--small" />&nbsp;
                            <span className="tiles__text--primary">20 * 20</span>
                        </span>
                        <div className="infoTiles__btn">
                            <ButtonSmall text="Add" click={createNew} />
                        </div>
                    </div>
                </div>
                <div className="infoTiles">
                    <h4 className="infoTiles__heading">Stage</h4>
                    <div className="infoTiles__content">
                        <span className="tiles__text tiles__text--flex">
                            Main Wall:&nbsp;
                            <span className="tiles__text--primary">84Px</span>
                        </span>
                        <span className="tiles__text tiles__text--flex">
                            <img src={TileImg} alt="Tile" className="tiles__img--small" />&nbsp;
                        </span>
                        <div className="infoTiles__btn">
                            <ButtonSmall text="Add" click={createNew} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiles