import { React, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getAssetDetails, getCommentDetails, addDescription } from '../../Redux/assets/assetActions';

import './Player.scss';

import HeaderP from '../../components/PlayerComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PlayerComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PlayerComponents/PlayerP/PlayerP';
import ShareModal from '../../components/Modals/ShareModal/ShareModal';



const Player = ({ match: { params: { assetId } }, getAssetDetails, getCommentDetails, addDescription, asset, location: { pathname } }) => {

    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)
    // This state is used to Show/ Hide the ShareModal
    const [showShareModal, setShowShareModal] = useState(false);
    // This state is Video Play Video Play/ Pause
    const [play, setPlay] = useState(false);

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
 // This Function is responsible to Show/ Hide the ShareModal
 const shareModalToggle = () => {

    if (showShareModal) {
        // Allow to scroll when closing the modal
        document.body.style.removeProperty('overflow');

    } else {
        // Disable scrolling on the `body` element when opening a modal
        document.body.style.overflow = 'hidden';
    }

    setShowShareModal(!showShareModal);
};

    return (
        <div className="player page-wrapper">
            {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

            <div className="player__header">
                <HeaderP toggle={toggle} asset={asset} setAssetPrivacy={setAssetPrivacy} shareModalToggle={shareModalToggle} />
            </div>
            <div className="player__sidebar">
                <SidebarP open={drawer} asset={asset} setPlay={setPlay} />
            </div>
            <div className="player__body">
                <PlayerP play={play} setPlay={setPlay} />
            </div>

            {/* This is ShareModal */}
            <ShareModal showModal={showShareModal} setShowModal={setShowShareModal} modalToggler={shareModalToggle} />
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

