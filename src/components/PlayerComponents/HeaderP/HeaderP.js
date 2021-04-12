import { React, useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDescription, deleteAsset, getLink } from '../../../Redux/assets/assetActions';
import { changeStatusCase } from '../../../utils/helperfunctions';

import './HeaderP.scss';

import Button from '../../Button/Button';
import NavIcon from '../../NavIcon/NavIcon';
import Dropdown from '../../Dropdown/Dropdown';
import ConfirmationModal from '../../Modals/ConfirmationModal/ConfirmationModal'

import Logo from '../../../images/logo.png';
// import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';


function HeaderP({ toggle, location, asset, history, addDescription, assetStatus, setAssetPrivacy, deleteAsset, getLink, shareModalToggle }) {

    //This state is responsible for toggling Confirmation Modal
    const [showConfirm, setShowConfirm] = useState(false);


    // share Link
    const shareLink = () => {

        let assetIdObj = {
            asset_ids: asset._id
        }
        getLink(assetIdObj)
        shareModalToggle()
    }

    const goBack = () => {
        history.goBack()
    }

    // This Function Is Passed In Confirmation Modal To Delete The Asset On Confirm
    const deleteAssetFunc = () => {
        deleteAsset(asset._id);
        history.goBack()
    }

    // Dropdown Option Value
    let status = [
        { rightIcon: '', leftIcon: '', value: 'Needs Review', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'In Progress', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Approved', goToMenu: '' }];

    // Dropdown Option Value
    let options = [
        { rightIcon: '', leftIcon: '', value: 'Download', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: asset?.private ? 'Make Public' : 'Make Private', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Reveal in project', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Delete', goToMenu: '' }];

    // Dropdown Option Value
    // let options = [
    //     {
    //         rightIcon: <ChevronIcon />, leftIcon: '', value: 'Download', goToMenu: 'download',
    //         child: [
    //             { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
    //             { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
    //             { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
    //             { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' }]
    //     },
    //     { rightIcon: '', leftIcon: '', value: asset?.private ? 'Make Public' : 'Make Private', goToMenu: '' },
    //     { rightIcon: '', leftIcon: '', value: 'Reveal in project', goToMenu: '' },
    //     { rightIcon: '', leftIcon: '', value: 'Delete', goToMenu: '' }];


    return (
        <Fragment>
            <div className="headerP">
                <div className="headerP__left-box">
                    <span className="headerP__back-btn" onClick={goBack}><i className="fas fa-less-than"></i></span>
                    <span className="headerP__title .truncate">{asset && asset.name}</span>
                </div>
                <div className="headerP__logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>

                <div className="headerP__right-box">
                    {asset && asset._id && <Dropdown text={changeStatusCase(asset.status)} menuItems={status} addDescription={addDescription} />}

                    <Dropdown text="---" menuItems={options} setAssetPrivacy={setAssetPrivacy} setShowConfirm={setShowConfirm} />

                    <Button text="Share" click={() => shareLink()} />

                    <span className="headerP__notification"><i className="fas fa-bell"></i> <span className="notificationCount">1</span></span>

                    <span className="headerP__help-icon">
                        <a href="./#" className="txt-dec-none"><i className="fas fa-question"></i></a>
                    </span>

                    <NavIcon toggle={toggle} />
                </div>
            </div>

            <ConfirmationModal show={showConfirm} setShow={setShowConfirm} confirmFunc={deleteAssetFunc} />
        </Fragment>
    )
}

var mapStateToProps = (state) => ({
    assetStatus: state.assets && state.assets.asset && state.assets.asset.status
})

var mapDispatchToProps = {
    addDescription,
    deleteAsset,
    getLink
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderP))