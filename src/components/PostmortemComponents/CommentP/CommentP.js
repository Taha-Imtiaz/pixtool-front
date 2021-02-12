import React from 'react';
import './CommentP.scss';
import Avatar from '../../Avatar/Avatar';

function CommentP() {
    return (
        <div className="comment">
            <div className="comment__head">
                <span className="comment__check">
                    <input type="checkBox" class="checkbox" />
                </span>
                <Avatar />
                <span className="comment__name">John Doe</span>
                <span className="comment__time">3d</span>
            </div>

            <div className="comment__main">
                <span className="comment__timespan">00:00</span>
                <span className="comment__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eos eaque commodi laudantium voluptatem distinctio libero facilis amet fugiat repudiandae!</span>
            </div>

            <div className="comment__bottom">
                <div className="comment__bottom--left">
                    <span className="comment__reply">Reply</span>
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i class="far fa-thumbs-up"></i></a></span>
                </div>
                <div className="comment__bottom--right">
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i class="far fa-edit"></i></a></span>
                    <span className="comment__icons"><a href="./#" className="txt-dec-none"><i class="far fa-trash-alt"></i></a></span>
                </div>
            </div>
        </div>
    )
}

export default CommentP
