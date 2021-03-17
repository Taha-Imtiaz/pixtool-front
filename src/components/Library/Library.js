import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Library.scss';

import Filter from '../../components/Filter/Filter';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Dropdown from '../Dropdown/Dropdown'
import ThumbnailCard from '../../components/Cards/ThumbnailCard/ThumbnailCard';

import { getProject } from '../../Redux/project/projectActions';
// import ThumbnailFolderCard from '../Cards/ThumbnailFolderCard/ThumbnailFolderCard';
import { uploadAsset } from '../../Redux/assets/assetActions'
import ThumbnailFolderCard from '../Cards/ThumbnailFolderCard/ThumbnailFolderCard';

const Library = ({ assets, teams, getProject, uploadAsset,project }) => {
    const createNew = () => { }

    //show all the assets (projects) of 1st team
    useEffect(() => {
        if (teams) {
            // get all projects of first team
            let { projects } = teams[0];
            // get assets of 1st project
            getProject(projects[0]._id)
        }
    }, [teams]);

    const handleVideoUpload = async (e) => {
       
        if (e.target.files[0]) {
            let file = e.target.files[0];
            const cover = await getVideoCover(file, 1.5);
           
            // print out the result image blob
            const data = new FormData()
            data.append('files', file, file.name)
            data.append('files', cover, cover.name)
            data.append('data', JSON.stringify({
                parent_id: "604b78582c85c0001553eea8"
            }))

            uploadAsset(data)
        }
    }

    // Dropdown Option Values
    let newUpload = [
        {
            rightIcon: '', leftIcon: '', value: 'File Upload', goToMenu: '', isUpload: {
                value: true,
                onUpload: handleVideoUpload
            }
        },
        {
            rightIcon: '', leftIcon: '', value: 'New Folder', goToMenu: '', isUpload: {
                value: false
            }
        },
    ];

    const getVideoCover = (file, seekTo = 0.0) => {
        return new Promise((resolve, reject) => {
            // load the file to a video player
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', URL.createObjectURL(file));
            videoPlayer.load();
            videoPlayer.addEventListener('error', (ex) => {
                reject("error when loading video file", ex);
            });
            // load metadata of the video to get video duration and dimensions
            videoPlayer.addEventListener('loadedmetadata', () => {
                // seek to user defined timestamp (in seconds) if possible
                if (videoPlayer.duration < seekTo) {
                    reject("video is too short.");
                    return;
                }
                // delay seeking or else 'seeked' event won't fire on Safari
                setTimeout(() => {
                    videoPlayer.currentTime = seekTo;
                }, 200);
                // extract video thumbnail once seeking is complete
                videoPlayer.addEventListener('seeked', () => {
                    // define a canvas to have the same dimension as the video
                    const canvas = document.createElement("canvas");
                    canvas.width = videoPlayer.videoWidth;
                    canvas.height = videoPlayer.videoHeight;
                    // draw the video frame to canvas
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
                    // return the canvas image as a blob
                    ctx.canvas.toBlob(
                        blob => {
                            resolve(blob);
                        },
                        "image/jpeg",
                        0.75 /* quality */
                    );
                });
            });
        });
    }
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
                            {/* <Button text="New" click={createNew} /> */}
                            <Dropdown text="New" menuItems={newUpload} />
                        </div>
                    </div>
                </div>

                <div className="library__main">
                    <div className="thumbnail-container">
                     
                        {assets && assets.map((asset) =>asset._type === "file" ? <ThumbnailCard key={asset._id} id = {asset._id} asset={asset} />: <ThumbnailFolderCard/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    assets: state.projects && state.projects.project && state.projects.project.assets,
    teams: state.teams && state.teams.teamList,
    project:state.projects && state.projects.project

})
var mapDispatchToProps = {
    getProject,
    uploadAsset
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
