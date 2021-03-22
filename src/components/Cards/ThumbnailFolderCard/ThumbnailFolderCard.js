import React from 'react';
import { connect } from 'react-redux';
import { getAssets } from '../../../Redux/project/projectActions';

import './ThumbnailFolderCard.scss';


const ThumbnailFolderCard = ({ id, getAssets, resource }) => {

    let srcArray = [];
    for (let i = 0; i < 5; i++) {
        srcArray.push('https://images.pexels.com/photos/6574738/pexels-photo-6574738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    }
    console.log(srcArray)

    let { name, thumbnails } = resource
    // const thumbnailsLength = thumbnails.length;
    const thumbnailsLength = srcArray.length;

    console.log(thumbnails)

    return (
        <div className="thumbnailFolderCard" onClick={() => getAssets(id)}>
            {/* <div
                className={thumbnailsLength <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}
            >
                {thumbnailsLength === 1 ? <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src={srcArray[0]}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span>}
                {thumbnailsLength === 2 && <span className={thumbnailsLength === 2 ? 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' : 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2'}>
                    <img src={srcArray[1]}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span>}
                {thumbnailsLength === 3 &&
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={srcArray[2]}
                            className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>

                }
                {
                    thumbnailsLength > 3 ?
                        <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                            {index < 2 ? <img src={thumbnailImg} alt="" /> : index === 2 ? <span> +{thumbnailsLength-2}</span>:null}
                            <span>+2</span>
                        </span>
                        : null
                }


            </div> */}

            <div className={thumbnailsLength <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src={srcArray[0]}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span>
                <span className={thumbnailsLength === 2 ? 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' : 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2'}>
                    <img src={srcArray[1]}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span>
                {thumbnailsLength === 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={srcArray[2]} className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>
                    :
                    null
                }
                {thumbnailsLength > 3 ?
                    <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <span>+2</span>
                    </span>
                    :
                    null
                }
            </div>


            {/* {thumbnails && thumbnails.map((thumbnailImg,index) =>
                <div className={thumbnailsPic <= 1 ? 'thumbnailFolderCard__thumbnailBox thumbnailFolderCard__thumbnailBox--1' : 'thumbnailFolderCard__thumbnailBox'}>
           { thumbnailsPic ===1 ?  
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--1">
                    <img src={thumbnailImg}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--1" />
                </span> : thumbnailsPic === 2 ?  
                <span className= 'thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--2 thumbnailFolderCard__imgBox--expand' >
                    <img src={thumbnailImg}
                        className="thumbnailFolderCard__img thumbnailFolderCard__img--2" />
                </span> : thumbnailsPic === 3 ?     
                <span className="thumbnailFolderCard__imgBox thumbnailFolderCard__imgBox--3">
                        <img src={thumbnailImg}
                            className="thumbnailFolderCard__img thumbnailFolderCard__img--3" />
                    </span>: <span> 
                      { index < 2 ? <img src={thumbnailImg} alt=""/>: index === 2 ? <span>+{thumbnails.length-2}</span>:null}
                    </span>}
                      </div>
                    )}
               */}



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
