import React from 'react';
import './Library.scss';
import Filter from "../../components/Filter/Filter";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import ThumbnailCard from "../../components/Cards/ThumbnailCard/ThumbnailCard";

function Library() {

    const createNew = () => { }

    return (
        <div>
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
                            <Button text="Share" click={createNew} />
                            <Button text="Create New" click={createNew} />
                        </div>
                    </div>
                </div>

                <div className="library__main">
                    <div className="thumbnail-container">
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
                        <ThumbnailCard />
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
