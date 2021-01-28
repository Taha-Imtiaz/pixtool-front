import React from 'react';
import './Playlist.scss';
import PlaylistCard from '../Cards/PlaylistCard/PlaylistCard';

function Playlist() {
    return (
        <div className="playlist">
            <div className="playlist__head">
                <h3 className="playlist__title">Playlist</h3>
            </div>

            <div className="playlist__content">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
    )
}

export default Playlist
