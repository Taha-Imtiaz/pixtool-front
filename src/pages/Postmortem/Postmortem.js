import { React, useState } from 'react';
import './Postmortem.scss';
import HeaderP from '../../components/PostmortemComponents/HeaderP/HeaderP';
import SidebarP from '../../components/PostmortemComponents/SidebarP/SidebarP';
import PlayerP from '../../components/PostmortemComponents/PlayerP/PlayerP';

function Postmortem() {
    // This state is responsible for toggling sidebar
    const [drawer, setDrawer] = useState(true)

    const toggle = () => {
        setDrawer(!drawer)
    }
    return (
        <div className="postmortem page-wrapper">                   {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}
            <div className="postmortem__header">
                <HeaderP toggle={toggle}/>
            </div>
            <div className="postmortem__sidebar">
                <SidebarP open={drawer}/>
            </div>
            <div className="postmortem__body">
                <PlayerP />
            </div>

        </div>
    )
}

export default Postmortem


