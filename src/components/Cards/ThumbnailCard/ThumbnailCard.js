import { React, Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import './ThumbnailCard.scss';

import { changeStatusCase } from '../../../utils/helperfunctions';

const ThumbnailCard = ({ resource, key, resourceId, reviewAssetId, history, showCheckbox, setAssetIds, shareAssetIds, location: { pathname }, match: { params: { id } } }) => {

    let { thumbnail, name, uploaded_at, uploader, status } = resource;

    const [videoStatusState, setVideoStatusState] = useState('');

    const updateAssetIndex = (e, assetId) => {
        // setCheckBoxState(!checkBoxState)
        // e.preventDefault();
        e.stopPropagation();
        setAssetIds(assetId);
    }
    const navigateUrl = pathname => {
        if (pathname.includes(`/review/${id}`)) {
            console.log(pathname.includes(`/review/${id}`), reviewAssetId)
            history.push(`/review/player/${id}/${reviewAssetId}`)
        }
        else {
            history.push(`/player/${resourceId}`)
        }
    }

    useEffect(() => {
        let videoStatus = changeStatusCase(status);

        if (videoStatus) {
            if (videoStatus === 'Needs Review') {
                setVideoStatusState('bg-red-tomato');

            } else if (videoStatus === 'In Progress') {
                setVideoStatusState('bg-green');

            } else if (videoStatus === 'Approved') {
                setVideoStatusState('bg-blue');

            } else {
                setVideoStatusState('bg-silver');
            }
        }

    }, [])


    // console.log(pathname, pathname.includes(`/review/${id}`))
    return (
        <div className="thumbnailCard" tabIndex="0" key={key} onClick={() => navigateUrl(pathname)}

        >
            <Fragment>

                {videoStatusState &&
                    <div id="thumbnailCardStatus" className={`thumbnailCard__status ${videoStatusState}`}>
                        {changeStatusCase(status)}
                    </div>
                }

                <div className="thumbnailCard__imgBox">
                    {thumbnail ? <img src={thumbnail} alt="Thumbnail" className="thumbnailCard__img" /> : <img src="" alt="Thumbnail" className="thumbnailCard__img" />}
                </div>

                <div className="thumbnailCard__bottom">
                    {showCheckbox ?
                        <input type="checkbox" name="share_select_checkBox" id="checkBox"
                            defaultChecked={shareAssetIds.includes(resource._id)} className="checkbox" 
                            onClick={(e) => updateAssetIndex(e, resource._id)} ></input>
                        :
                        null
                    }
                    <div className="thumbnailCard__text truncate">
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
