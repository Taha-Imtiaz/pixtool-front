import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProjectAssets } from '../../../Redux/project/projectActions';

import './ThumbnailFolderCard.scss';


const ThumbnailFolderCard = ({ id, getProjectAssets, resource, history, projectId, match: { params } }) => {

    const [thumbnailsLength, setThumbnailsLength] = useState(0)
    let { name, thumbnails } = resource

    useEffect(() => {
        if (thumbnails) {
            setThumbnailsLength(thumbnails.length)
        }


    }, [thumbnails])



    // fetch assets of the given projects
    const fetchAssets = (projectId, assetId) => {
        history.push(`/home/library/${projectId}/${assetId}`)
        let assetObj = {
            status: "in_progress",
        }
        getProjectAssets(assetId, assetObj)
    }
    

    return (
        <div className="thumbnailFolderCard"
            onClick={() => fetchAssets(projectId, id)}
        >


            { thumbnails && <div className={thumbnailsLength <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src={thumbnails[0]}
                        alt="" className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span>
                <span className={thumbnailsLength === 2 ? 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' : 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2'}>
                    <img src={thumbnails[1]}
                        alt="" className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span>
                {thumbnailsLength === 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={thumbnails[2]} alt="" className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
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




            <div className="thumbnailFolderCard__text">
                <div className="thumbnailFolderCard__name truncate">{name}</div>
                <div className="thumbnailFolderCard__datail">
                    <span>John</span>
                    &nbsp;-&nbsp;
                    <span>01 Jan 2021</span>
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
