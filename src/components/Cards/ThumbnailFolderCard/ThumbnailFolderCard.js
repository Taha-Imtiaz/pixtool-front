import React from 'react';
import { connect } from 'react-redux';
import { getAssets } from '../../../Redux/project/projectActions';

import './ThumbnailFolderCard.scss';


const ThumbnailFolderCard = ({id, getAssets, resource}) => {
    
    
    
    const navigate = () => {
        getAssets(id)
     console.log(id)
       
    }
    const thumbnails = 4;

    return (
        <div className="thumbnailFolderCard" onClick = {navigate}>
            {/* <div className="thumbnailFolderCard__status">Needs Approval</div> */}
            <div className={thumbnails <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src="https://images.pexels.com/photos/6574738/pexels-photo-6574738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span>
                <span className={thumbnails === 2 ? 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' : 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2'}>
                    <img src="https://images.pexels.com/photos/6574738/pexels-photo-6574738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span>
                {thumbnails === 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src="https://images.pexels.com/photos/6574738/pexels-photo-6574738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>
                    : null
                }
                {
                    thumbnails > 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <span>+2</span>
                    </span>
                    : null
                }
            </div>
            <div className="thumbnailFolderCard__text">
                <div className="thumbnailFolderCard__name truncate">Hello World</div>
                <div className="thumbnailFolderCard__datail">
                    <span>John</span>
                    &nbsp;-&nbsp;
                    <span>01 Jan 2021</span>
                </div>
            </div>
        </div>
    )
}
// var mapStateToProps = (state) => ({
//     project: state.project
// })
var mapDispatchToProps = {
    getAssets
}

export default connect(null,mapDispatchToProps)(ThumbnailFolderCard)
