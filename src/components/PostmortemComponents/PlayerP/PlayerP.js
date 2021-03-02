import { React, useEffect, useState } from 'react';

import './PlayerP.scss';

import 'emoji-mart/css/emoji-mart.css';

import Avatar from '../../Avatar/Avatar';
import ButtonSmall from '../../Button/ButtonSmall';
import Dropdown from '../../Dropdown/Dropdown';
import { Picker } from 'emoji-mart';

import Video from '../../../images/mov_bbb.mp4';
import Test1 from '../../../images/test1.jpg'

import PlayerControls from '../../../images/player-icons/sprite.svg';

function PlayerP() {
    const createNew = () => { }


    // State For Comment TextArea
    const [textValue, setTextValue] = useState('');
    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);
    // State For Video Player Controls
    const [play, setPlay] = useState(false);
    const [loop, setLoop] = useState(false);
    const [volume, setVolume] = useState('medium');
    const [volumeValue, setVolumeValue] = useState(.5);



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
        document.querySelector(".postmortem").addEventListener("click", handleClickEvent);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emojiBox])



    // Function To Add & Append Emojis To Comments TextArea
    const addEmoji = (e) => {
        let newValue = textValue + e.native;
        setTextValue(newValue);
    }

    // Function To Show/ Hide Emoji Picker
    const showEmojiBox = () => {
        setEmojiBox(!emojiBox);
    }

    //Function For Change Handling of Comment TextArea
    function textAreaChangeHandle(event) {
        const value = event.target.value;
        setTextValue(value);
    }

    // Dropdown Option Values
    let commentPrivacy = [
        { rightIcon: '', leftIcon: '', value: 'Everyone can see', goToMenu: '' },
        { rightIcon: '', leftIcon: '', value: 'Team only', goToMenu: '' }
    ];

    // For Video Player Controls

    /* Function For Play/ Pause */
    const playPause = () => {
        let myVideo = document.getElementById('myVideo');

        if (play === false) {
            myVideo.play();
            setPlay(!play);

        } else {
            myVideo.pause();
            setPlay(!play);
        }
    }

    /* Function For Loop */
    const loopVideo = () => {
        let myVideo = document.getElementById('myVideo');

        if (loop === false) {
            if (typeof myVideo.loop == 'boolean') { // loop supported
                myVideo.loop = true;

            } else { // loop property not supported
                myVideo.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                });
            }
            document.getElementById('loop-icon').style.fill = '#37CC84';

        } else {
            if (typeof myVideo.loop == 'boolean') { // loop supported
                myVideo.loop = false;

            } else { // loop property not supported
                myVideo.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.pause();
                });
            }
            document.getElementById('loop-icon').style.fill = 'rgba(255, 255, 255, .8)';
        }
        setLoop(!loop);
    }

    /* Change Handler Function For Volume */
    const volumeChangeHandler = (event) => {
        console.log(event)
        let myVideo = document.getElementById('myVideo');
        myVideo.volume = event.target.value;


        if (event.target.value === '0') {
            setVolume('mute');

        } else if (event.target.value > .6) {
            setVolume('high');

        } else if (event.target.value < .4) {
            setVolume('low');

        } else {
            setVolume('medium');
        }
    }
    /* Function For Volume Button/Icon Click For Mute/Unmute */
    const mute = () => {

        let myVideo = document.getElementById('myVideo');

        if (volume !== 'mute') {
            setVolumeValue(myVideo.volume);
            document.getElementById('volume-bar').value = 0;
            setVolume('mute');

        } else {
            if (volumeValue > .6) {
                document.getElementById('volume-bar').value = volumeValue;
                setVolume('high');

            } else if (volumeValue < .4) {
                document.getElementById('volume-bar').value = volumeValue;
                setVolume('low');

            } else {
                document.getElementById('volume-bar').value = volumeValue;
                setVolume('medium');

            }
        }
    }

    /* Function For Video Duration */
    const seekTimeUpdate = () => {
        let myVideo = document.getElementById('myVideo');
        let curtimetext = document.getElementById("curtimetext");
        let durtimetext = document.getElementById("durtimetext");

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

    /* For Seeking & Updating Time Duration  */
    useEffect(() => {
        let myVideo = document.getElementById('myVideo');
        myVideo.addEventListener("timeupdate", seekTimeUpdate, false);

    }, [])

    /* Function To Toggle the fullscreen On/Off */
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

    return (
        <div className="playerP">
            <video id="myVideo" className="playerP__video" poster={Test1} onClick={playPause}>
                <source src={Video} type="video/mp4" />
                Your browser does not support HTML video.
            </video>
            <div className="playerP__control-box">
                <div className="playerP__timestrip">

                </div>

                <div className="playerP__control-area">
                    <div className="playerP__control-area--left">
                        <span className="playerP__icons" onClick={playPause}>
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

                        <span className="playerP__icons" >1x</span>

                        <svg id="loop-icon" className="playerP__icons" title="Loop" onClick={loopVideo}>
                            <use href={PlayerControls + "#icon-loop"}></use>
                        </svg>

                        {/* Volume Icons */}
                        {volume === 'mute' ?
                            <svg className="playerP__icons playerP__icons--volume" title="Unmute" onClick={mute}>
                                <use href={PlayerControls + "#icon-volume-mute2"}></use>
                            </svg>
                            :
                            <span>
                                {volume === 'high' ?
                                    <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={mute}>
                                        <use href={PlayerControls + "#icon-volume-high"}></use>
                                    </svg>
                                    :
                                    <span>
                                        {
                                            volume === 'low' ?
                                                <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={mute}>
                                                    <use href={PlayerControls + "#icon-volume-low"}></use>
                                                </svg>
                                                :
                                                <svg className="playerP__icons playerP__icons--volume" title="Mute" onClick={mute}>
                                                    <use href={PlayerControls + "#icon-volume-medium"}></use>
                                                </svg>
                                        }
                                    </span>
                                }
                            </span>
                        }
                        <input type='range' id='volume-bar' className="playerP__icons--volumeBar" title="Volume" min='0' max='1' step='.1' defaultValue='.5' onChange={(e) => volumeChangeHandler(e)}></input>

                        <span className="playerP__timeDuration">
                            <span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span>
                        </span>
                    </div>

                    <div className="playerP__control-area--right">
                        <svg className="playerP__icons" title="Guides">
                            <use href={PlayerControls + "#icon-display"}></use>
                        </svg>
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

                    <textarea className="playerP__text-area" placeholder="Leave your comment here..." name="textValue" onChange={textAreaChangeHandle} value={textValue}></textarea>
                </div>

                <div className="playerP__comment-box--bottom">
                    <div></div>
                    <div className="playerP__comment-box--bottom-2">
                        <div className="playerP__comment-box--bottom-left">
                            <div className="timespanBox">
                                <span className="timespanBox__clock"><i className="far fa-clock"></i></span>
                                <span className="timespanBox__time">00:00</span>
                                <span className="timespanBox__checkbox"><input type="checkBox" className="checkbox" /></span>
                            </div>

                            <Dropdown text="Privacy" menuItems={commentPrivacy} />
                        </div>

                        <div className="playerP__comment-box--bottom-right">
                            {emojiBox === true ?
                                <div className="emoji-picker__box">
                                    <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                                </div>
                                : null
                            };
                                <span className="emoji-picker__icon" onClick={showEmojiBox}>
                                <i className="far fa-laugh"></i>
                            </span>
                            <ButtonSmall text="Send" click={createNew} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayerP
