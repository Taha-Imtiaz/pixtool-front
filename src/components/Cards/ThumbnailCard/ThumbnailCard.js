import React from 'react';
import { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ThumbnailFolderCard from '../ThumbnailFolderCard/ThumbnailFolderCard';
import './ThumbnailCard.scss';

const ThumbnailCard = ({ resource, id, history }) => {
    // const linkToPost = () => {
    //     history.push('/player')

    // }
    let { thumbnail, name, _type } = resource
    console.log(id, name, _type)
    return (
        <div className="thumbnailCard" key={id}>
            {_type === "file" ? <Fragment>
                <Link to ={ `/player/${id}`}>
                <div className="thumbnailCard__status">
                    Needs Approval
            </div>
                <div className="thumbnailCard__imgBox">
                    <img src="" alt="Thumbnail" className="thumbnailCard__img" />
                </div>
                <div className="thumbnailCard__text">
                    <div className="thumbnailCard__name truncate">{name}</div>
                    <div className="thumbnailCard__datail">
                        <span>John</span>
                    &nbsp;-&nbsp;
                    <span>01 Jan 2021</span>
                    </div>
                </div>
                </Link>
               
            </Fragment> : <Fragment>
                <ThumbnailFolderCard />
            </Fragment>}
        </div>
    )
}

export default withRouter(ThumbnailCard)
