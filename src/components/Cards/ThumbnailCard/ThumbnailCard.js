import { React, useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { changeStatusCase } from '../../../utils/helperfunctions';
import './ThumbnailCard.scss';

const ThumbnailCard = ({ resource, key, id, history, showCheckbox, index }) => {

    let { thumbnail, name, uploaded_at, uploader, status } = resource;
    let assetArr = []
    
    const [assetArr, setAssetArr] = useState([])

    // state for setting asset index
    const [assetIndex, setAssetIndex] = useState(0)

    // state for checkbox
    const [checkBoxState, setCheckBoxState] = useState(false)



    const updateAssetIndex = (assetId, index) => {


        if (index !== assetIndex) {
            setAssetIndex(index)
            setCheckBoxState(true)
            assetArr.push({
                ...assetArr, assetId
            })
            console.log(assetArr)
        }
        else {
            setAssetIndex(-1)
            setCheckBoxState(false)
        }
    }


    console.log(checkBoxState, assetIndex)
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
                        <input type="checkbox" name="share_select_checkBox" id="checkBox" className="checkbox" checked={checkBoxState} onClick={() => updateAssetIndex(resource._id, index)} ></input>
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
