import React from 'react';
import './Export.scss';
import Button from '../../Button/Button';
import WallStageLargeCard from "../../Cards/WallStageLargeCard/WallStageLargeCard";
import StagesThumbnailCardV2 from '../../Cards/StagesThumbnailCardV2/StagesThumbnailCardV2';

function Export() {

    const createNew = () => { }

    return (
        <div className="export">
            <div className="export__buttons">
                <Button text="Export as PNG" click={createNew} />
                <Button text="Export Video" click={createNew} />
            </div>

            <div className="export__details">
                <div className="export__flex--1">
                    <div className="export__group">
                        <div className="export__title">Name</div>
                        <div className="export__content">Party Show</div>
                    </div>

                    <div className="export__group">
                        <div className="export__title">Date</div>
                        <div className="export__content">16-JAN-2021 16:45</div>
                    </div>
                </div>

                <div className="export__group">
                    <div className="export__title">Details</div>
                    <div className="export__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</div>
                </div>
            </div>

            <div className="export__flex--2">
                <div className="export__wallStageLargeCard">
                    <WallStageLargeCard perPage={3} />
                </div>

                <div className="export__flex--3">
                    <div className="export__stagesThumbnailCardV2">
                        <StagesThumbnailCardV2 />
                    </div>

                    <div className="export__show-notes">
                        <div className="show-notes__title">Show Notes</div>
                        <div className="show-notes__content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Export
