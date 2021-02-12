import { React, useState } from 'react';
import './PlayerP.scss';
import Video from '../../../images/mov_bbb.mp4'
import Test1 from '../../../images/test1.jpg'
import Avatar from '../../Avatar/Avatar';
import ButtonSmall from '../../Button/ButtonSmall';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function PlayerP() {
    const createNew = () => { }

    // State For Comment TextArea
    const [textValue, setTextValue] = useState('');
    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);

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

                </div>
            </div>

            <div className="playerP__comment-box">
                <div className="playerP__comment-box--top">
                    <div className="playerP__avatar">
                        <Avatar />
                    </div>

                    <textarea className="playerP__text-area" placeholder="Leave your comment here..." name = "textValue" onChange={textAreaChangeHandle} value={textValue}></textarea>
                </div>

                <div className="playerP__comment-box--bottom">
                    <div></div>
                    <div className="playerP__comment-box--bottom-2">
                        <div className="playerP__comment-box--bottom-left">
                            <ButtonSmall className="sendBtn" text="00:22" click={createNew} />
                            <ButtonSmall className="sendBtn" text="Everyone" click={createNew} />
                        </div>

                        <div className="playerP__comment-box--bottom-right">
                            {emojiBox === true ?
                                <div className="emoji-picker__box">
                                    <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                                </div>
                                : null
                            };
                            <span className="emoji-picker__icon" onClick={showEmojiBox}><i class="far fa-laugh"></i></span>
                            <ButtonSmall className="sendBtn" text="Send" click={createNew} />
                        </div>
                    </div>

                </div>
            </div>

            {/* <div>
                        <Picker set='apple' />
                        <Picker onSelect={addEmoji} />
                        <Picker title='Pick your emoji…' emoji='point_up' />
                        <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                        <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} />
                    </div> */}
        </div>
    )
}

export default PlayerP
