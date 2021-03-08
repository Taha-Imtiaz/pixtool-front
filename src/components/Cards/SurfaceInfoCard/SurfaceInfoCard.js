import React from 'react';
import './SurfaceInfoCard.scss';

import TileImg1 from '../../../images/tile.svg'

function SurfaceInfoCard() {
    return (
        <div className="surfaceInfoCard">
            <input type="checkBox" className="checkbox" />

            <img src={TileImg1} alt="Tile Thumbnail" className="surfaceInfoCard__img" />

            <table className="surfaceInfoCard__table">
                <tbody>
                    <tr className="table__row">
                        <td className="table__text">Title: </td>
                        <td className="table__text table__text--primary">01</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__text">Pixel: </td>
                        <td className="table__text table__text--primary">15PX</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__text">Size: </td>
                        <td className="table__text table__text--primary">32 * 32</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SurfaceInfoCard
