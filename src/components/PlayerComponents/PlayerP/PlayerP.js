import { React, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../../../Redux/assets/assetActions';

import './PlayerP.scss';
import 'emoji-mart/css/emoji-mart.css';

import Avatar from '../../Avatar/Avatar';
import ButtonSmall from '../../Button/ButtonSmall';
import Dropdown from '../../Dropdown/Dropdown';
import { Picker } from 'emoji-mart';

import PlayerControls from '../../../images/player-icons/sprite.svg';


const PlayerP = ({ asset, addComment, match: { params: { assetId } } }) => {


    /* ------------------------------ ENTIRE FILE SCOPE VARIABLES ------------------------------ */
    var commentPrivacy;


    /* ---------------------------- ALL STATES FOR PLAYERP COMPONENT---------------------------- */


    // States For Video Player Controls
    const [play, setPlay] = useState(false);
    const [loop, setLoop] = useState(false);
    const [volume, setVolume] = useState('medium');
    const [volumeValue, setVolumeValue] = useState(1);

    // State For Video Player Thumbnail
    const [videoThumbNail, setVideoThumbNail] = useState('')
    // State For Video Player Source
    const [videoSource, setVideoSource] = useState('')

    // State For Comment TextArea
    const [textValue, setTextValue] = useState('');

    // State For Video Time Stamp At Time Of Comment
    const [timespan, setTimespan] = useState('00 : 00');

    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);


    /* ---------------------------- FOR VIDEO PLAYER CONTROLS ---------------------------- */


    // Function To Play/ Pause The Video
    const playPause = () => {
        let myVideo = document.getElementById('myVideo');

        if (play === false) {
            myVideo.play();

        } else {
            myVideo.pause();
        }
        setPlay(!play);
    }

    // Function For Loop
    const loopVideo = () => {
        let myVideo = document.getElementById('myVideo');
        let loopIcon = document.getElementById('loop-icon');

        if (loop === false) {
            if (typeof myVideo.loop == 'boolean') { // loop supported
                myVideo.loop = true;

            } else { // loop property not supported
                myVideo.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                });
            }
            loopIcon.style.fill = '#37CC84';

        } else {
            if (typeof myVideo.loop == 'boolean') { // loop supported
                myVideo.loop = false;

            } else { // loop property not supported
                myVideo.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.pause();
                });
            }
            loopIcon.style.fill = 'rgba(255, 255, 255, .8)';
        }
        setLoop(!loop);
    }

    // Function For Volume Button/Icon Click For Mute/Unmute
    const mute = (e) => {
        let myVideo = document.getElementById('myVideo');
        let volumeBar = document.getElementById('volume-bar');

        if (volume !== 'mute') {
            setVolumeValue(myVideo.volume);
            volumeBar.value = 0;
            myVideo.muted = true;
            setVolume('mute');

        } else {
            volumeBar.value = volumeValue;
            myVideo.muted = false;

            if (volumeValue > .6) {
                setVolume('high');

            } else if (volumeValue < .4) {
                setVolume('low');

            } else {
                setVolume('medium');

            }
        }
    }

    // Volume Bar Change Handler Function For Setting Volume
    const volumeChangeHandler = (event) => {
        let myVideo = document.getElementById('myVideo');
        myVideo.volume = event.target.value;

        if (event.target.value === '0') {
            setVolume('mute');
            myVideo.muted = true;

        } else if (event.target.value > .6) {
            setVolume('high');
            myVideo.muted = false;

        } else if (event.target.value < .4) {
            setVolume('low');
            myVideo.muted = false;

        } else {
            setVolume('medium');
            myVideo.muted = false;
        }
    }

    // Function To Toggle the fullscreen On/Off
    const toggleFullScreen = () => {
        let myVideo = document.getElementById('myVideo');

        if (myVideo.requestFullscreen) {
            if (document.fullScreenElement) {
                document.cancelFullScreen();
            } else {
                myVideo.requestFullscreen();
            }
        }
        else if (myVideo.msRequestFullscreen) {
            if (document.msFullscreenElement) {
                document.msExitFullscreen();
            } else {
                myVideo.msRequestFullscreen();
            }
        }
        else if (myVideo.mozRequestFullScreen) {
            if (document.mozFullScreenElement) {
                document.mozCancelFullScreen();
            } else {
                myVideo.mozRequestFullScreen();
            }
        }
        else if (myVideo.webkitRequestFullscreen) {
            if (document.webkitFullscreenElement) {
                document.webkitCancelFullScreen();
            } else {
                myVideo.webkitRequestFullscreen();
            }
        }
        else {
            alert("Fullscreen API is not supported");
        }
    }

    // Function For Setting Volume Bar Value From Volume Of Full Screen
    /* useEffect(() => {
        let myVideo = document.getElementById('myVideo');
        let volumeBar = document.getElementById('volume-bar');

        myVideo.addEventListener('volumechange', function () {
            volumeBar.value = myVideo.volume;
            if (volumeBar.value === '0') {
                setVolume('mute');

            } else if (volumeBar.value > .6) {
                setVolume('high');

            } else if (volumeBar.value < .4) {
                setVolume('low');

            } else {
                setVolume('medium');
            }
        });

    }, []) */

    // Function For Video Duration
    const seekTimeUpdate = () => {
        let myVideo = document.getElementById('myVideo');
        let curtimetext = document.getElementById("curtimetext");
        let durtimetext = document.getElementById("durtimetext");
        if (myVideo) {
            // let nt = myVideo.currentTime * (100 / myVideo.duration);
            // seekslider.value = nt;
            let curmins = Math.floor(myVideo.currentTime / 60);
            let cursecs = Math.floor(myVideo.currentTime - curmins * 60);
            let durmins = Math.floor(myVideo.duration / 60);
            let dursecs = Math.floor(myVideo.duration - durmins * 60);
            if (cursecs < 10) { cursecs = "0" + cursecs; }
            if (dursecs < 10) { dursecs = "0" + dursecs; }
            if (curmins < 10) { curmins = "0" + curmins; }
            if (durmins < 10) { durmins = "0" + durmins; }
            curtimetext.innerHTML = curmins + ":" + cursecs;
            durtimetext.innerHTML = durmins + ":" + dursecs;
        }

    }

    // Function For Resetting The Player State When Video Ends
    const resetPlayer = () => {
        let myVideo = document.getElementById('myVideo');
        myVideo.pause();
        setPlay(false);
    }

    // For Seeking & Updating Time Duration & Resetting The Player State When Video Ends
    useEffect(() => {
        let myVideo = document.getElementById('myVideo');

        // For Seeking & Updating Time Duration (Initially 00:00 / 00:00)
        myVideo.addEventListener('timeupdate', seekTimeUpdate, false);

        // For Resetting The Player State When Video Ends
        myVideo.addEventListener('ended', resetPlayer, false);

    }, [])

    // For Video Progress Bar
    useEffect(() => {
        let myVideo = document.getElementById('myVideo');
        let progress = document.getElementById('progress');
        // let progressBar = document.getElementById('progress-bar');

        myVideo.addEventListener('loadedmetadata', function () {
            progress.setAttribute('max', myVideo.duration);
        });

        myVideo.addEventListener('timeupdate', function () {
            if (!progress.getAttribute('max')) progress.setAttribute('max', myVideo.duration);
            progress.value = myVideo.currentTime;
        });

        progress.addEventListener('click', function (e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * myVideo.duration;
            myVideo.currentTime = scrubTime;
        });

    }, [])


    // To set the Video Poster and Video Source On componentWillMount
    useEffect(() => {
        // On componentWillMount
        if (asset) {
            // console.log(asset);
            let { thumbnail, original } = asset;
            setVideoThumbNail(thumbnail);
            setVideoSource(original);
        }

    }, [asset])

    // To remove the Video Poster and Video Source On componentWillUnmount
    useEffect(() => {
        // On componentWillUnmount
        return (() => {
            // console.log("component is unmounted");
            // console.log(asset);
            setVideoThumbNail('');
            setVideoSource('');
        })

    }, [])


    /* ---------------------------- FOR COMMENTS WRITING BOX ---------------------------- */


    // Comment Privacy Dropdown Option Values
    let commentPrivacyOpt = [
        { rightIcon: '', leftIcon: '', value: 'Everyone can see', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Team only', goToMenu: '' }
    ];

    // Function To Show/ Hide Emoji Picker
    const showEmojiBox = () => {
        setEmojiBox(!emojiBox);
    }

    // To Close the Emoji Picker whenever click outside it
    useEffect(() => {

        function handleClickEvent(event) {
            if (event.target.className === 'far fa-laugh' || !emojiBox) {
            } else {
                // Get parent element and check if click happened outside parent only
                const parent = document.querySelector(".emoji-picker__box");
                if (emojiBox && parent && !parent.contains(event.target)) {
                    showEmojiBox();
                }
            }
        }
        document.querySelector(".player").addEventListener("click", handleClickEvent);
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [emojiBox])

    // Function To Add & Append Emojis To Comments TextArea
    const addEmoji = (e) => {
        let newValue = textValue + e.native;
        setTextValue(newValue);
    }

    //Function For Change Handling of Comment TextArea
    function textAreaChangeHandle(event) {
        const value = event.target.value;
        setTextValue(value);
    }

    // Function To Get The Current Video Play Time & Pause The Video When Comment Textarea Focus
    const getTimespan = () => {
        let myVideo = document.getElementById('myVideo');

        if (play !== false) {
            myVideo.pause();
            setPlay(!play);
        }

        if (textValue === '') {
            let curmins = Math.floor(myVideo.currentTime / 60);
            let cursecs = Math.floor(myVideo.currentTime - curmins * 60)

            if (cursecs < 10) { cursecs = "0" + cursecs; }
            if (curmins < 10) { curmins = "0" + curmins; }

            setTimespan(curmins + ":" + cursecs);

        }
    }

    // Function to Mark Check The TimeSpan CheckBox When Its Container Is Clicked
    const markCheckBox = () => {
        let checkbox = document.getElementById('timespanCheckbox');

        if (checkbox.checked === false) {
            checkbox.checked = true;

        } else {
            checkbox.checked = false;
        }
    }


    // Function To Set Comment Privacy On Dropdown Option Click
    const setCommentPrivacy = (value) => {
        commentPrivacy = value;
    }

    // Function to post the comment to the backend
    const sendComment = () => {
        if (textValue !== '') {
            let checkbox = document.getElementById('timespanCheckbox');
            let formData = new FormData();
            let obj = {};


            if (checkbox.checked === false) {
                obj = {
                    "comment": textValue,
                    "video_current_time": '',
                    "privacy_status": commentPrivacy
                }

            } else {
                obj = {
                    "comment": textValue,
                    "video_current_time": timespan,
                    "privacy_status": commentPrivacy
                }
            }

            formData.append('data', JSON.stringify(obj));
            addComment(formData, asset._id);
            setTextValue('');
        }
    }


    /* -------------------------------------------------------------------------------------------- */


    return (
        <div className="playerP">
            {/* The poster attribute specifies an image to be shown while the video is downloading, or until the user hits the play button. 
            If this is not included, the first frame of the video will be used instead. */}

            <video id="myVideo" className="playerP__video" poster={videoThumbNail} onClick={() => playPause()}>
                {videoSource && asset._id === assetId
                    ?
                    <source src={videoSource} type="video/mp4" key={videoSource} />
                    :
                    null
                }
                Your browser does not support HTML video.
            </video>
            <div className="playerP__control-box">
                <div className="playerP__progressBox">
                    <progress id="progress" className="playerP__progressBar" value="0" min="0">
                        {/* <span id="progress-bar"></span> */}
                    </progress>
                </div>

                <div className="playerP__control-area">
                    <div className="playerP__control-area--left">
                        <span className="playerP__icons" onClick={() => playPause()}>
                            {play ?
                                <svg className="playerP__icons">
                                    <use href={PlayerControls + "#icon-pause2"}></use>
                                </svg>
                                :
                                <svg className="playerP__icons">
                                    <use href={PlayerControls + "#icon-play3"}></use>
                                </svg>
                            }
                        </span>

                        {/* <span className="playerP__icons" >1x</span> */}

                        <svg id="loop-icon" className="playerP__icons" title="Loop" onClick={loopVideo}>
                            <use href={PlayerControls + "#icon-loop"}></use>
                        </svg>

                        {/* Volume Icons */}
                        {volume === 'mute' ?
                            <svg className="playerP__icons playerP__icons--volume" title="Unmute" onClick={(e) => mute(e)}>
                                <use href={PlayerControls + "#icon-volume-mute2"}></use>
                            </svg>
                            :
                            <span>
                                {volume === 'high' ?
                                    <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={(e) => mute(e)}>
                                        <use href={PlayerControls + "#icon-volume-high"}></use>
                                    </svg>
                                    :
                                    <span>
                                        {
                                            volume === 'low' ?
                                                <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={(e) => mute(e)}>
                                                    <use href={PlayerControls + "#icon-volume-low"}></use>
                                                </svg>
                                                :
                                                <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={(e) => mute(e)}>
                                                    <use href={PlayerControls + "#icon-volume-medium"}></use>
                                                </svg>
                                        }
                                    </span>
                                }
                            </span>
                        }
                        <input type='range' id='volume-bar' className="playerP__icons--volumeBar" title="Volume" min='0' max='1' step='.1' defaultValue='1' onChange={(e) => volumeChangeHandler(e)}></input>

                        <span className="playerP__timeDuration">
                            <span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span>
                        </span>
                    </div>

                    <div className="playerP__control-area--right">
                        {/* <svg className="playerP__icons" title="Guides">
                            <use href={PlayerControls + "#icon-display"}></use>
                        </svg> */}
                        <svg className="playerP__icons" title="Full Screen" onClick={toggleFullScreen}>
                            <use href={PlayerControls + "#icon-enlarge"}></use>
                        </svg>
                        {/* <svg className="playerP__icons" title="Exit Full Screen">
                            <use href={PlayerControls + "#icon-shrink"}></use>
                        </svg> */}
                    </div>
                </div>
            </div>
            <div className="playerP__comment-box">
                <div className="playerP__comment-box--top">
                    <div className="playerP__avatar">
                        <Avatar />
                    </div>

                    <textarea className="playerP__text-area" placeholder="Leave your comment here..." name="textValue" onFocus={() => getTimespan()} onChange={textAreaChangeHandle} value={textValue}></textarea>
                </div>

                <div className="playerP__comment-box--bottom">
                    <div></div>
                    <div className="playerP__comment-box--bottom-2">
                        <div className="playerP__comment-box--bottom-left">
                            <div className="timespanBox" onClick={markCheckBox} >
                                <span className="timespanBox__clock"><i className="far fa-clock"></i></span>
                                <span className="timespanBox__time">{timespan}</span>
                                <span className="timespanBox__checkbox"><input type="checkBox" id="timespanCheckbox" className="checkbox" onClick={markCheckBox} /></span>
                            </div>

                            <Dropdown text="Privacy" menuItems={commentPrivacyOpt} setCommentPrivacy={setCommentPrivacy}/>
                        </div>

                        <div className="playerP__comment-box--bottom-right">
                            {emojiBox === true ?
                                <div className="emoji-picker__box">
                                    <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                                </div>
                                : null
                            }
                            <span className="emoji-picker__icon" onClick={showEmojiBox}>
                                <i className="far fa-laugh"></i>
                            </span>
                            <ButtonSmall text="Send" click={sendComment} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
var mapStateToProps = (state) => ({
    asset: state.assets && state.assets.asset
})

var mapDispatchToProps = {
    addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayerP))
