import { React, useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { changeStatusCase } from '../../../utils/helperfunctions';
import './ThumbnailCard.scss';

const ThumbnailCard = ({ resource, key, id, history, showCheckbox }) => {

    let { thumbnail, name, uploaded_at, uploader, status } = resource;
    // change the case of status


    return (
        <div className="thumbnailCard" tabIndex="0" key={key} onDoubleClick={() => history.push(`/player/${id}`)}>
            <Fragment>
                <div className="thumbnailCard__status">
                    {changeStatusCase(status)}
                </div>

                <div className="thumbnailCard__imgBox">
                    {thumbnail ? <img src={thumbnail} alt="Thumbnail" className="thumbnailCard__img" /> : <img src="" alt="Thumbnail" className="thumbnailCard__img" />}
                </div>

                <div className="thumbnailCard__bottom">
                    {showCheckbox ?
                        <input type="checkbox" name="share_select_checkBox" id="checkBox" className="checkbox"></input>
                        :
                        null
                    }
                    <div className="thumbnailCard__text">
                        <div className="thumbnailCard__name truncate">{name}</div>
                        <div className="thumbnailCard__datail">
                            <span>{uploader}</span>
                        &nbsp;-&nbsp;
                        <span>{uploaded_at}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

export default withRouter(ThumbnailCard)
