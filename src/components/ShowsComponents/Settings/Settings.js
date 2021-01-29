import React from 'react';
import './Settings.scss';
import WallStageCard from '../../Cards/WallStageCard/WallStageCard'
import Playlist from '../../Playlist/Playlist'

function Settings() {
    return (
        <div className="settings">
            <div className="settings__stage">
                <div className="settings__stage--title">Stage</div>
                <div className="settings__stage--cards">
                    <WallStageCard />
                    <WallStageCard />
                    <WallStageCard />
                    <WallStageCard />
                </div>
            </div>

            <div className="settings__playlist">
                <Playlist />
            </div>

            <div className="settings__notes">
                <h3 className="settings__notes--title">Show Notes</h3>

                <p className="settings__notes--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                <br/>
                <br/>
                <p className="settings__notes--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                <br/>
                <br/>
                <p className="settings__notes--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
        </div>
    )
}

export default Settings
