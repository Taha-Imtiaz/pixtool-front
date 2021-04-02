import React from 'react';
import { Fragment } from 'react';
import {  withRouter } from 'react-router-dom';
import './ThumbnailCard.scss';

const ThumbnailCard = ({ resource, key,id, history }) => {
    
    let { thumbnail, name, uploaded_at,uploader } = resource
    
    return (
        <div className="thumbnailCard" tabIndex="0" key={key} onClick = {() => history.push(`/player/${id}`)}>
           <Fragment>
                <div className="thumbnailCard__status">
                    Needs Approval
                </div>

                <div className="thumbnailCard__imgBox">
                  {thumbnail ? <img src={thumbnail} alt="Thumbnail" className="thumbnailCard__img" /> :  <img src="" alt="Thumbnail" className="thumbnailCard__img" />}
                </div>

                <div className="thumbnailCard__text">
                    <div className="thumbnailCard__name truncate">{name}</div>
                    <div className="thumbnailCard__datail">
                        <span>{uploader}</span>
                        &nbsp;-&nbsp;
                        <span>{uploaded_at}</span>
                    </div>
                </div>
            </Fragment> 
        </div>
    )
}

export default withRouter(ThumbnailCard)
