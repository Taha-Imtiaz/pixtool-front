import React, { useEffect } from 'react';

import './Home.scss'

import Tabs from "../../components/NavigationTabs/Tabs";
import InnerTabs from "../../components/InnerNav/InnerTabs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Library from '../../components/Library/Library';
import Media from '../../components/ShowsComponents/Media/Media';
import Settings from '../../components/ShowsComponents/Settings/Settings';
import Overview from '../../components/ShowsComponents/Overview/Overview';
import Preview from '../../components/ShowsComponents/Preview/Preview';
import Export from '../../components/ShowsComponents/Export/Export';
import Surfaces from '../../components/StagesComponents/Surfaces/Surfaces';
import Screens from '../../components/StagesComponents/Screens/Screens';
import Stages from '../../components/StagesComponents/Stages/Stages';
import { connect } from 'react-redux';
import { getAccount} from '../../Redux/account/accountActions';
import { getTeams } from '../../Redux/team/teamActions';


function Home({ getAccount, getTeams, account }) {

    useEffect(() => {
        getAccount()
    }, [])

    useEffect(() => {
    if(account) {
        let {account_id} = account
        console.log(account_id[0]._id)
        getTeams(account_id[0]._id)
    }
    }, [account])

    /* Arrays To Pass The Sidebar Content In Props */
    let sidebarMenu1 = [
        { icon: 'fas fa-book', value: 'My Library' },
        { icon: 'far fa-file-alt', value: 'Shared with me' },
        { icon: 'fas fa-cog', value: 'Settings' }
    ];
    return (
        <div className="home page-wrapper">
            {/* "page-wrapper" class is added only to tell dropdowns that it is the main wrapper and to make them function properly */}

            <Sidebar menu1={sidebarMenu1} />
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
                                <Overview />
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
                                <Preview />
                            </div>

                            {/*Shows - Export Tab Content */}
                            <div label="Export">
                                <Export />
                            </div>
                        </InnerTabs>
                    </div>

                    {/* Stages Tab Content */}
                    <div label="Stages">
                        <InnerTabs>
                            {/* Stages - Surfaces Tab Content */}
                            <div label="Surfaces">
                                <Surfaces />
                            </div>

                            {/* Stages - Screens Tab Content */}
                            <div label="Screens">
                                <Screens />
                            </div>

                            {/*Stages - Stages Tab Content */}
                            <div label="Stages">
                                <Stages />
                            </div>

                        </InnerTabs>
                    </div>
                </Tabs>

            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    account: state.accounts && state.accounts.account
})
var mapDispatchToProps = {
    getAccount,
    getTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
