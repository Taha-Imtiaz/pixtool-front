import React from 'react';
import './Overview.scss';

function Overview() {
    return (
        <div className="overview">
            <form action="" className="overview__form">
                <div className="overview__group">
                    <label htmlFor="overviewName" className="overview__label">Name</label>
                    <input type="text" name="overviewName" id="overviewName" className="overview__input" placeholder="Party Show" />
                </div>

                <div className="overview__group">
                    <label htmlFor="overviewTime" className="overview__label">Time</label>
                    <input type="text" name="overviewTime" id="overviewTime" className="overview__input" placeholder="16-JAN-2021 16:45" />
                </div>

                <div className="overview__group">
                    <label htmlFor="overviewDetails" className="overview__label">Details</label>
                    <input type="text" name="overviewDetails" id="overviewDetails" className="overview__input" placeholder="16 MB File" />
                </div>

                <div className="overview__group">
                    <label htmlFor="overviewDescription" className="overview__label">Description</label>
                    {/* <input type="text" name="overviewDescription" id="overviewDescription" className="overview__input"/> */}
                    <textarea name="overviewDescription" id="overviewDescription" className="overview__input overview__input--textArea" cols="30" rows="10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default Overview
