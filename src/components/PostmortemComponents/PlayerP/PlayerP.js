import { React, useEffect, useState } from 'react';

import './PlayerP.scss';

import 'emoji-mart/css/emoji-mart.css';

import Avatar from '../../Avatar/Avatar';
import ButtonSmall from '../../Button/ButtonSmall';
import Dropdown from '../../Dropdown/Dropdown';
import { Picker } from 'emoji-mart';

import Video from '../../../images/mov_bbb.mp4';
import Test1 from '../../../images/test1.jpg'

// import PlayerControls from '../../../images/player-controls.svg';
import FullScreen from '../../../images/full-screen.svg';
// import Mute from '../../../images/mute.svg';
import Play from '../../../images/play-button.svg';
// import Pause from '../../../images/pause.svg';
import Guides from '../../../images/guides.svg';
import Loop from '../../../images/loop.svg';
import Volume from '../../../images/volume.svg';

import { ReactComponent as ChevronIcon } from '../../../icons/chevron.svg';

function PlayerP() {
    const createNew = () => { }

    // State For Comment TextArea
    const [textValue, setTextValue] = useState('');
    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);

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
        { rightIcon: '', leftIcon: '', value: 'Team only', goToMenu: '' }];

    return (
        <div className="playerP">
            <video className="playerP__video" poster={Test1}>
                <source src={Video} type="video/mp4" />
                Your browser does not support HTML video.
            </video>
            <div className="playerP__control-box">
                <div className="playerP__timestrip">

                </div>

                <div className="playerP__control-area">
                    <div className="playerP__control-area--left">
                        <img src={Play} alt="Play" title="Play" className="playerP__icons" />
                        {/* <img src={Pause} alt="Pause" title="Pause" className="playerP__icons"/> */}
                        <span className="playerP__icons" >1x</span>
                        <img src={Loop} alt="Loop" title="Loop" className="playerP__icons" />
                        <img src={Volume} alt="Volume" title="Volume" className="playerP__icons" />
                        {/* <img src={Mute} alt="Mute" title="Mute" className="playerP__icons"/> */}
                    </div>

                    <div className="playerP__control-area--right">
                        <img src={Guides} alt="Guides" title="Guides" className="playerP__icons" />
                        <img src={FullScreen} alt="Full Screen" title="Full Screen" className="playerP__icons" />
                    </div>
                    {/* <svg className="playerP__icons">
                        <use className="playerP__icons" href={PlayerControls + "#fullscreen"} />
                    </svg> */}
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
                            
                            <Dropdown text="Privacy" menuItems={commentPrivacy}/>
                        </div>

                        <div className="playerP__comment-box--bottom-right">
                            {emojiBox === true ?
                                <div className="emoji-picker__box">
                                    <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                                </div>
                                : null
                            };
                            <span className="emoji-picker__icon" onClick={showEmojiBox}><i className="far fa-laugh"></i></span>
                            <ButtonSmall text="Send" click={createNew} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayerP
