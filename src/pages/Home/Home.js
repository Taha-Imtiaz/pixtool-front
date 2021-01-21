import React, { useState } from 'react';
import './Home.scss'
import Tabs from "../../components/NavigationTabs/Tabs";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import ThumbnailCard from "../../components/Cards/ThumbnailCard";
import Modal from '../../components/Modal/Modal';

function Home() {

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const openModalHandler = () => {
        setShow(true)
    }
    const createNew = () => {
        
    }

    return (
        <div>
            {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
            <Modal show={show} close={closeModalHandler} />
            <div className="home">
                <Sidebar />
                <div>
                    <Header className="header" />
                    <Tabs className="tabs">
                        <div className="library" label="Library">
                            <div className="library__head">
                                <Filter />
                                <div className="library__head-right">
                                    <div className="avatar__container">
                                        <div className="avatar">
                                            <i class="fas fa-user-plus"></i>
                                        </div>
                                        <Avatar />
                                        <Avatar />
                                    </div>

                                    <div className="library__head__buttons">
                                        <Button text="Share" click={openModalHandler} />
                                        <Button text="Create New" click={createNew}/>
                                    </div>
                                </div>
                            </div>

                            <div className="library__main">
                                <div className="thumbnail-container">
                                    <ThumbnailCard />
                                    <ThumbnailCard />
                                    <ThumbnailCard />
                                </div>
                            </div>
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
        </div>
    )
}

export default Home
