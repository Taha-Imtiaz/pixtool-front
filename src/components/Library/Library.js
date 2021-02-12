import React, { useState } from 'react';
import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";
import Modal from '../../components/Modal/Modal';

function Library() {

    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const openModalHandler = () => setShow(true);
    const createNew = () => {}

    return (
        <div>
            {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
            <Modal show={show} close={closeModalHandler} />

            <div className="library">
                <div className="library__head">
                    <Filter />
                    <div className="library__head-right">
                        <div className="avatar__container">
                            <div className="avatar">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <Avatar />
                            <Avatar />
                        </div>

                        <div className="library__head__buttons">
                            <Button text="Share" click={openModalHandler} />
                            <Button text="Create New" click={createNew} />
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
        </div>
    )
}

export default Library
