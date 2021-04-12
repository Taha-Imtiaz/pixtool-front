import { React, useState, useEffect, Fragment } from 'react';
import TimeAgo from 'react-timeago';
import { connect } from 'react-redux';
import { addReply, deleteComments } from '../../../Redux/assets/assetActions';

import './CommentP.scss';
import 'emoji-mart/css/emoji-mart.css';

import Avatar from '../../Avatar/Avatar';
import { Picker } from 'emoji-mart';

function CommentP({ asset, comment, addReply, deleteComments, setPlay }) {


    /* ---------------------------- ALL STATES FOR COMMENTP COMPONENT---------------------------- */


    // State For Toggling Reply TextArea
    const [writeReply, setWriteReply] = useState(false)

    // State For Toggling Comment Reply TextArea
    const [writeCommentReply, setWriteCommentReply] = useState(false)

    // State For Reply TextArea
    const [replyText, setReplyText] = useState('');

    // State For Emojibox
    const [emojiBox, setEmojiBox] = useState(false);


    /* ---------------------------- ALL FUNCTIONS FOR COMMENTP COMPONENT---------------------------- */

    console.log(comment)

    // Function For Main Comment Reply TextArea Toggling 
    const reply = () => {
        setReplyText('');
        setWriteCommentReply(false);
        setWriteReply(!writeReply);
    }

    // Function For Sub Comment TextArea Reply Toggling
    const commentReply = () => {
        setReplyText('');
        setWriteReply(false);
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
        document.querySelector(".player").addEventListener("click", handleClickEvent);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emojiBox])

    // Function To Add & Append Emojis To Comments TextArea
    const addEmoji = (e) => {
        let replyTextValue = replyText + e.native;
        setReplyText(replyTextValue);
    }

    // Function For Change Handling of Comment TextArea
    function replyTextAreaChangeHandle(event) {
        const value = event.target.value;
        setReplyText(value);
    }

    // Function To Submit/ Save/ Record The Comment Reply
    const submitReply = (event) => {
        if (event.key === 'Enter' || event.charCode === 13 || event.keyCode === 13) {
            if (event.shiftKey) { } // New Line Is Added

            else if (replyText !== '') {
                let obj = {
                    "comment": replyText,
                    "commentId": comment._id
                }
                addReply(obj, asset._id);
                setReplyText('');

                // Below Two States Toggle Off The Reply TextArea
                setWriteCommentReply(false);
                setWriteReply(false);
            }
            return false;
        }
    }

    // Function To Delete The Comments
    const deleteComment = (comment) => {
        let assetId = asset._id;
        deleteComments(assetId, comment);
    }

    // Function To set Video Current Time To That Of Comment
    const gotoTimespan = () => {
        let myVideo = document.getElementById('myVideo');
        // myVideo.currentTime = comment.video_current_time;

        let timespan = comment.video_current_time;
        timespan = timespan.split(":")

        myVideo.currentTime = (timespan[0] * 60) + Number(timespan[1]);
        myVideo.pause()
        setPlay(false);
    }


    /* -------------------------------------------------------------------------------------------- */


    return (
        <Fragment>
            {/* For Normal/ Main Comment */}
            <div className="comment" tabIndex="0">
                <div className="comment__head">
                    <Avatar profileImg={comment.user.images.profile_image} />
                    <span className="truncate">
                        <div className="comment__name truncate">{comment.user.full_name}</div>
                        <div className="comment__time">
                            <TimeAgo date={comment.createdAt} minPeriod={10} />
                        </div>
                    </span>
                    <span className="comment__check">
                        <input type="checkBox" className="checkbox" />
                    </span>
                </div>

                <div className="comment__main">
                    <span className="comment__timespan" onClick={gotoTimespan}>{comment.video_current_time}</span>
                    <span className="comment__text">{comment.comment}</span>
                </div>

                <div className="comment__bottom">
                    <div className="comment__bottom--left">
                        <span className="comment__icons" onClick={reply}>Reply</span>
                        <span className="comment__icons"><i className="far fa-thumbs-up"></i></span>
                    </div>
                    <div className="comment__bottom--right">
                        {/* <span className="comment__icons"><i className="far fa-edit"></i></span> */}
                        <span className="comment__icons" onClick={() => deleteComment(comment._id)}><i className="far fa-trash-alt"></i></span>
                    </div>
                </div>

                {writeReply ?
                    <div className="reply">
                        <textarea className="reply__text-area" name="replyTextArea" autoFocus onKeyPress={(e) => submitReply(e)} onChange={replyTextAreaChangeHandle} value={replyText}></textarea>

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

            {/* For Sub/ Reply Comment */}
            {comment.replies ?
                comment.replies.map((reply) => <div className="replyComment" tabIndex="1" key={reply._id}>
                    <div className="comment replyComment__content">
                        <div className="comment__head">
                            <Avatar profileImg={reply.user.images.profile_image} />
                            <span className="truncate">
                                <div className="comment__name truncate">{reply.user.full_name}</div>
                                <div className="comment__time">
                                    <TimeAgo date={reply.createdAt} minPeriod={10} />
                                </div>
                            </span>
                            <span className="comment__check">
                                <input type="checkBox" className="checkbox" />
                            </span>
                        </div>

                        <div className="comment__main">
                            <span className="comment__text">{reply.comment}</span>
                        </div>

                        <div className="comment__bottom">
                            <div className="comment__bottom--left">
                                <span className="comment__icons" onClick={commentReply}>Reply</span>
                                <span className="comment__icons"><i className="far fa-thumbs-up"></i></span>
                            </div>
                            <div className="comment__bottom--right">
                                {/* <span className="comment__icons"><i className="far fa-edit"></i></span> */}
                                <span className="comment__icons" onClick={() => deleteComment(reply._id)}><i className="far fa-trash-alt"></i></span>
                            </div>
                        </div>
                    </div>
                    {writeCommentReply ?
                        <div className="reply">
                            <textarea className="reply__text-area" name="replyTextArea" autoFocus onKeyPress={(e) => submitReply(e)} onChange={replyTextAreaChangeHandle} value={replyText}></textarea>

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
                )
                : null
            }

        </Fragment>
    )
}

var mapStateToProps = (state) => ({
    asset: state.assets && state.assets.asset
})

var mapDispatchToProps = {
    addReply, deleteComments
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentP)
