import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProjectAssets } from '../../../Redux/project/projectActions';

import './ThumbnailFolderCard.scss';


const ThumbnailFolderCard = ({ id, getProjectAssets, resource, history, projectId, match: { params }, showCheckbox, setAssetIds }) => {

    const [thumbnailsLength, setThumbnailsLength] = useState(0)

    let { name, thumbnails, uploaded_at, uploader } = resource

    useEffect(() => {
        if (thumbnails) {
            setThumbnailsLength(thumbnails.length)
        }

    }, [thumbnails])


    // fetch assets of the given projects
    const fetchAssets = (projectId, assetId) => {
        history.push(`/home/library/${projectId}/${assetId}`)
        let assetObj = {
            filters: {
                status: "all",
            }
        }
        getProjectAssets(assetId, assetObj)
    }

    const updateAssetIndex = (assetId, index) => {
        // setCheckBoxState(!checkBoxState)
        setAssetIds(assetId);
    }


    return (
        <div className="thumbnailFolderCard" tabIndex="0" onDoubleClick={() => fetchAssets(projectId, id)} >

            { thumbnails && <div className={thumbnailsLength <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
                {thumbnailsLength >= 1 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                        <img src={thumbnails[0].url} alt="Thumbnail" className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                    </span>
                    : null
                }

                {thumbnailsLength >= 2 ?
                    <span className={thumbnailsLength === 2 ? 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' : 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2'}>
                        <img src={thumbnails[1].url} alt="Thumbnail" className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                    </span>
                    :
                    null
                }

                {thumbnailsLength === 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={thumbnails[2].url} alt="" className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>
                    :
                    null
                }

                {thumbnailsLength > 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <span>+{thumbnailsLength - 2}</span>
                    </span>
                    :
                    null
                }
            </div>
            }

            {/* <div className="thumbnailFolderCard__text">
                <div className="thumbnailFolderCard__name truncate">{name}</div>
                <div className="thumbnailFolderCard__datail">
                    <span>{uploader}</span>
                    &nbsp;-&nbsp;
                    <span>{uploaded_at}</span>
                </div>
            </div> */}

            <div className="thumbnailFolderCard__bottom">
                {showCheckbox ?
                    <input type="checkbox" name="share_select_checkBox" id="checkBox" className="checkbox"
                        onClick={() => updateAssetIndex(resource._id)} ></input>
                    :
                    null
                }
                <div className="thumbnailFolderCard__text">
                    <div className="thumbnailFolderCard__name truncate">{name}</div>
                    <div className="thumbnailFolderCard__datail">
                        <span>{uploader}</span>
                        &nbsp;-&nbsp;
                        <span>{uploaded_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

var mapStateToProps = (state) => ({
    projectId: state.project && state.project.parentId,
})
var mapDispatchToProps = {
    getProjectAssets
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ThumbnailFolderCard))
