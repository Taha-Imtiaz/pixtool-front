import React from 'react';
import './Postmortem.scss';
import HeaderP from '../../components/PostmortemComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PostmortemComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PostmortemComponents/PlayerP/PlayerP';

function Postmortem() {
    return (
        <div className="postmortem">
            <div className="postmortem__header">
                <HeaderP />
            </div>
            <div className="postmortem__sidebar">
                <SidebarP />
            </div>
            <div className="postmortem__body">
                <PlayerP />
            </div>
            
        </div>
    )
}

export default Postmortem


