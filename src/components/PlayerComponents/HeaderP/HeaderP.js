import { React } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDescription, deleteAsset } from '../../../Redux/assets/assetActions';

import './HeaderP.scss';

import Button from '../../Button/Button';
import NavIcon from '../../NavIcon/NavIcon';
import Dropdown from '../../Dropdown/Dropdown';

import Logo from '../../../images/logo.png';
import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';
import { changeStatusCase } from '../../../utils/helperfunctions';

function HeaderP({ toggle, location, asset, history, addDescription, assetStatus, setAssetPrivacy, deleteAsset }) {

    const createNew = () => { }

    const goBack = () => {
        history.goBack()
    }

    // Dropdown Option Values

    let status = [
        { rightIcon: '', leftIcon: '', value: 'Needs Review', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'In Progress', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Approved', goToMenu: '' }];

    let options = [
        {
            rightIcon: <ChevronIcon />, leftIcon: '', value: 'Download', goToMenu: 'download',
            child: [
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' },
                { rightIcon: '', leftIcon: '', value: 'AVC 1920x1080', goToMenu: '' }]
        },
        { rightIcon: '', leftIcon: '', value: asset?.private ? 'Make Public' : 'Make Private', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Reveal in project', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Delete', goToMenu: '' }];


    return (
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

                <Dropdown text="---" menuItems={options} setAssetPrivacy={setAssetPrivacy} deleteAsset={deleteAsset} />

                <Button text="Share" click={createNew} />

                <span className="headerP__notification"><i className="fas fa-bell"></i> <span className="notificationCount">1</span></span>

                <span className="headerP__help-icon">
                    <a href="./#" className="txt-dec-none"><i className="fas fa-question"></i></a>
                </span>

                <NavIcon toggle={(e) => toggle()} />
            </div>
        </div>
    )
}

var mapStateToProps = (state) => ({
    assetStatus: state.assets && state.assets.asset && state.assets.asset.status
})

var mapDispatchToProps = {
    addDescription,
    deleteAsset
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderP))