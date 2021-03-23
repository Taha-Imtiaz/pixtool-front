import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAssetDetails } from '../../Redux/assets/assetActions';

import './Postmortem.scss';

import HeaderP from '../../components/PlayerComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PlayerComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PlayerComponents/PlayerP/PlayerP';


const Player = ({ match: { params: { assetId } }, getAssetDetails }) => {
    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    useEffect(() => {
        getAssetDetails(assetId)
    }, [])

    const toggle = () => {
        setDrawer(!drawer)
    }
    return (
        <div className="postmortem page-wrapper">
            {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}
            
            <div className="postmortem__header">
                <HeaderP toggle={toggle} />
            </div>
            <div className="postmortem__sidebar">
                <SidebarP open={drawer} />
            </div>
            <div className="postmortem__body">
                <PlayerP />
            </div>

        </div>
    )
}
var mapDispatchToProps = {
    getAssetDetails
}
export default connect(null, mapDispatchToProps)(Player)

