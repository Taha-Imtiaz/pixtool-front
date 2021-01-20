import React from 'react';
import './Home.scss'
import Tabs from "../../components/NavigationTabs/Tabs";
import Header from "../../components/Header/Header";

function Home() {
    return (
        <div className="home">
            <div className="color"></div>
            <div className="other">
                <Header />
                <Tabs>
                    <div label="Library">
                        See ya later, <em>Alligator</em>!
                </div>
                    <div label="Shows">
                        After 'while, <em>Crocodile</em>!
                </div>
                    <div label="Stages">
                        Nothing to see here, this tab is <em>extinct</em>!
                </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Home
