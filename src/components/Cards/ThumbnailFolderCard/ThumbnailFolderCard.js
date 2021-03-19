import React from 'react';
import { connect } from 'react-redux';
import { getAssets } from '../../../Redux/project/projectActions';

import './ThumbnailFolderCard.scss';


const ThumbnailFolderCard = ({ id, getAssets, resource }) => {


// const thumbnailsPic = 4;
let {name,thumbnails} = resource
console.log(thumbnails)

    return (
        <div className="thumbnailFolderCard" onClick={() => getAssets(id)}>
            {/* <div className="thumbnailFolderCard__status">Needs Approval</div> */}

          
            <div className={thumbnailsPic <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
            {thumbnails && thumbnails.map((thumbnailImg) => thumbnailImg.length <=1 ?  
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src={thumbnailImg}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span> : thumbnailImg.length === 2 ?  
                <span className= 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' >
                    <img src={thumbnailImg}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span> : thumbnailImg.length === 3 ?     
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={thumbnailImg}
                            className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>: <span>{thumbnails.length - 2} </span>)}
              
               
                 {/* {thumbnailsPic === 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={thumbnailImg}
                            className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>
                    : null
                }
                {
                    thumbnailsPic > 3 ?
                        <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                            <span>+2</span>
                        </span>
                        : null
                } */}
            </div>
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
// var mapStateToProps = (state) => ({
//     thumbnails: state.project && state.project.thumbnails
// })
var mapDispatchToProps = {
    getAssets
}

export default connect(null, mapDispatchToProps)(ThumbnailFolderCard)
