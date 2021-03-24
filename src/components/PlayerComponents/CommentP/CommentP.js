import { React, useState, useEffect, Fragment } from 'react';
import TimeAgo from 'react-timeago';

import './CommentP.scss';
import 'emoji-mart/css/emoji-mart.css';

import Avatar from '../../Avatar/Avatar';
import { Picker } from 'emoji-mart';

function CommentP({ comment }) {

    // State For Toggling Reply TextArea
    const [writeReply, setWriteReply] = useState(false)

    // State For Toggling Comment Reply TextArea
    const [writeCommentReply, setWriteCommentReply] = useState(false)

    // State For Reply TextArea
    const [replyText, setReplyText] = useState('');

    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);

    // Function For Toggling Reply TextArea
    const reply = () => {
        setWriteReply(!writeReply);
    }

    // Function For Toggling Reply TextArea
    const commentReply = () => {
        setWriteCommentReply(!writeCommentReply);
    }

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
        document.querySelector(".postmortem").addEventListener("click", handleClickEvent);
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [emojiBox])

    // Function To Add & Append Emojis To Comments TextArea
    const addEmoji = (e) => {
        let replyTextValue = replyText + e.native;
        setReplyText(replyTextValue);
    }

    //Function For Change Handling of Comment TextArea
    function replyTextAreaChangeHandle(event) {
        const value = event.target.value;
        setReplyText(value);
    }

    return (
        <Fragment>
            <div className="comment" tabindex="0">
                <div className="comment__head">
                    <span className="comment__check">
                        <input type="checkBox" className="checkbox" />
                    </span>
                    <Avatar profileImg={comment.user.images.profile_image} />
                    <span className="comment__name">{comment.user.name}</span>
                    <span className="comment__time">
                        <TimeAgo date={comment.createdAt} minPeriod={10} />
                    </span>
                </div>

                <div className="comment__main">
                    <span className="comment__timespan">{comment.video_current_time}</span>
                    <span className="comment__text">{comment.comment}</span>
                </div>

                <div className="comment__bottom">
                    <div className="comment__bottom--left">
                        <span className="comment__icons" onClick={reply}>Reply</span>
                        <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-thumbs-up"></i></a></span>
                    </div>
                    <div className="comment__bottom--right">
                        <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-edit"></i></a></span>
                        <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-trash-alt"></i></a></span>
                    </div>
                </div>

                {writeReply ?
                    <div className="reply">
                        <textarea className="reply__text-area" name="replyTextArea" onChange={replyTextAreaChangeHandle} value={replyText}></textarea>

                        {emojiBox === true ?
                            <div className="emoji-picker__box">
                                <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                            </div>
                            : null
                        }
                        <span className="emoji-picker__icon" onClick={showEmojiBox}>
                            <i className="far fa-laugh"></i>
                        </span>
                    </div>
                    : null
                }
            </div>

            {/* For Reply Comment */}
            <div className="replyComment" tabindex="1">
                <div className="comment replyComment__content">
                    <div className="comment__head">
                        <span className="comment__check">
                            <input type="checkBox" className="checkbox" />
                        </span>
                        <Avatar profileImg={comment.user.images.profile_image} />
                        <span className="comment__name">{comment.user.name}</span>
                        <span className="comment__time">
                            <TimeAgo date={comment.createdAt} minPeriod={10} />
                        </span>
                    </div>

                    <div className="comment__main">
                        {/* <span className="comment__timespan">{comment.video_current_time}</span> */}
                        <span className="comment__text">{comment.comment}</span>
                    </div>

                    <div className="comment__bottom">
                        <div className="comment__bottom--left">
                            <span className="comment__icons" onClick={commentReply}>Reply</span>
                            <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-thumbs-up"></i></a></span>
                        </div>
                        <div className="comment__bottom--right">
                            <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-edit"></i></a></span>
                            <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-trash-alt"></i></a></span>
                        </div>
                    </div>
                </div>
                {writeCommentReply ?
                    <div className="reply">
                        <textarea className="reply__text-area" name="replyTextArea" onChange={replyTextAreaChangeHandle} value={replyText}></textarea>

                        {emojiBox === true ?
                            <div className="emoji-picker__box">
                                <Picker set='google' color={'#181F47'} onSelect={addEmoji} />
                            </div>
                            : null
                        }
                        <span className="emoji-picker__icon" onClick={showEmojiBox}>
                            <i className="far fa-laugh"></i>
                        </span>
                    </div>
                    : null
                }
            </div>
        </Fragment>
    )
}

export default CommentP
