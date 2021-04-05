import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAssetDetails, getCommentDetails } from '../../Redux/assets/assetActions';

import './Player.scss';

import HeaderP from '../../components/PlayerComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PlayerComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PlayerComponents/PlayerP/PlayerP';


const Player = ({ match: { params: { assetId } }, getAssetDetails, getCommentDetails, asset, location:{pathname} }) => {
    
    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    useEffect(() => {
        // set the current path
        sessionStorage.setItem('path', pathname)
        getAssetDetails(assetId)
        getCommentDetails(assetId)
    }, [])

    const toggle = () => {
        setDrawer(!drawer)
    }
    
    return (
        <div className="player page-wrapper">
            {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

            <div className="player__header">
                <HeaderP toggle={toggle} asset={asset} />
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
    asset: state.assets && state.assets.asset
})

var mapDispatchToProps = {
    getAssetDetails,
    getCommentDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

