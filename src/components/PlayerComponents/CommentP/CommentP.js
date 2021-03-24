import React from 'react';
import TimeAgo from 'react-timeago'

import './CommentP.scss';

import Avatar from '../../Avatar/Avatar';

function CommentP({ comment }) {
    
    return (
        <div className="comment">
            <div className="comment__head">
                <span className="comment__check">
                    <input type="checkBox" className="checkbox" />
                </span>
                <Avatar profileImg={comment.user.images.profile_image}/>
                <span className="comment__name">{comment.user.name}</span>
                <span className="comment__time">
                    <TimeAgo date={comment.createdAt} />
                </span>
            </div>

            <div className="comment__main">
                <span className="comment__timespan">{comment.video_current_time}</span>
                <span className="comment__text">{comment.comment}</span>
            </div>

            <div className="comment__bottom">
                <div className="comment__bottom--left">
                    <span className="comment__reply">Reply</span>
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-thumbs-up"></i></a></span>
                </div>
                <div className="comment__bottom--right">
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-edit"></i></a></span>
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i className="far fa-trash-alt"></i></a></span>
                </div>
            </div>
        </div>
    )
}

export default CommentP
