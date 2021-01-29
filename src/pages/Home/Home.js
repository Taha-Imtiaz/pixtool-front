import React from 'react';
import './Home.scss'
import Tabs from "../../components/NavigationTabs/Tabs";
import InnerTabs from "../../components/InnerNav/InnerTabs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Library from '../../components/Library/Library';
import Media from '../../components/ShowsComponents/Media/Media';
import Settings from '../../components/ShowsComponents/Settings/Settings';

function Home() {

    return (
        <div className="home">
            <Sidebar />
            <div>
                <Header className="header" />

                {/* This is home's main tab which include Library, Shows & Stages */}
                <Tabs className="tabs">

                    {/* Library Tab Content */}
                    <div label="Library">
                        <Library />
                    </div>

                    {/* Shows Tab Content */}
                    <div label="Shows">
                        <InnerTabs>

                            {/* Shows - Overview Tab Content */}
                            <div label="Overview">
                                Overview
                            </div>

                            {/* Shows - Settings Tab Content */}
                            <div label="Settings">
                                <Settings />
                            </div>

                            {/*Shows - Media Tab Content */}
                            <div label="Media">
                                <Media />
                            </div>

                            {/*Shows -  Preview Tab Content */}
                            <div label="Preview">
                                Preview
                            </div>

                            {/*Shows - Export Tab Content */}
                            <div label="Export">
                                Export
                            </div>
                        </InnerTabs>
                    </div>

                    {/* Stages Tab Content */}
                    <div label="Stages">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                </Tabs>

            </div>
        </div>
    )
}

export default Home
