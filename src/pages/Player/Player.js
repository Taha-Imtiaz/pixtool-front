import { React, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getAssetDetails, getCommentDetails, addDescription } from '../../Redux/assets/assetActions';

import './Player.scss';

import HeaderP from '../../components/PlayerComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PlayerComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PlayerComponents/PlayerP/PlayerP';


const Player = ({ match: { params: { assetId } }, getAssetDetails, getCommentDetails, addDescription, asset, location: { pathname } }) => {
    console.log(asset)

    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    useEffect(() => {
        // set the current path
        sessionStorage.setItem('path', pathname)
        getAssetDetails(assetId)
        getCommentDetails(assetId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggle = () => {
        setDrawer(!drawer)
    }

    // For Making The Video Public/ Private
    const setAssetPrivacy = () => {
        console.log("setAssetPrivacy Called");
        let obj = {};

        if (!asset.private) {
            obj = {
                "private": true,
            }
            
        } else {
            obj = {
                "private": false,
            }
        }
        addDescription(obj, asset._id);
    }

    return (
        <div className="player page-wrapper">
            {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

            <div className="player__header">
                <HeaderP toggle={toggle} asset={asset} setAssetPrivacy={setAssetPrivacy} />
            </div>
            <div className="player__sidebar">
                <SidebarP open={drawer} asset={asset} />
            </div>
            <div className="player__body">
                <PlayerP />
            </div>

        </div>
    )
}

var mapStateToProps = (state) => ({
    asset: state.assets && state.assets.asset,
})

var mapDispatchToProps = {
    getAssetDetails,
    getCommentDetails,
    addDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Player))

