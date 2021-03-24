import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './SidebarP.scss';

import TabsP from '../NavigationTabsP/TabsP';
import CommentP from '../../PlayerComponents/CommentP/CommentP';

function SidebarP({ comments, open }) {

    // States For Video Description On Player Sidebar 
    const [editEnabled, setEditEnabled] = useState(false);
    const [description, setDescription] = useState('');
    const [tempDescription, setTempDescription] = useState('');

    // Description TextArea Change Handler 
    const textAreaChangeHandler = (event) => {
        const value = event.target.value;
        setTempDescription(value);
    }

    // For Opening The Edit Description Textbox
    const setEditEnabledHandler = () => {
        setEditEnabled(true)
        setTempDescription(description)
    }

    // For Saving The Description Typed In Textbox
    const hanldeSaveDescription = () => {
        setEditEnabled(false)
        setDescription(tempDescription)
    }

    // Function To Set The Height Of Comment Area Of SidebarP
    const setCommentsHeight = () => {
        let windowHeight = window.innerHeight;

        setTimeout(() => {
            let comments = document.getElementById('comments');

            let sidebarHeadHeight = (windowHeight - (document.getElementById('sidebarPHead').offsetHeight + document.querySelector('.tab-listP').offsetHeight + document.querySelector('.headerP').offsetHeight)).toString();
            if (comments) comments.style.maxHeight = (sidebarHeadHeight + 'px');
        });
    }

    // To Set The Height Of Comment Area Of SidebarP
    useEffect(() => {
        let sidebarP = document.getElementById('sidebarP');
        window.addEventListener('load', setCommentsHeight, false);
        sidebarP.addEventListener('click', setCommentsHeight, false);

    }, [])


    return (
        <div id="sidebarP" className={open ? 'sidebarP' : 'sidebarP sidebarPCollapse'}>
            <div id="sidebar-overlay" className={open ? '' : 'sidebarP__overlay'}></div>
            <div id="sidebarPHead" className="sidebarP__head">
                <div className="sidebarP__info">
                    <span className="sidebarP__info--name">John</span>
                    <span className="sidebarP__info--time">uploaded 3d ago</span>
                </div>

                <div className="sidebarP__description">
                    {editEnabled ?
                        <div>
                            <div className="sidebarP__description--3">
                                <textarea className="description__text-area" name="descriptiontext" onChange={(e) => textAreaChangeHandler(e)} value={tempDescription}></textarea>
                                <span className="description__buttons">
                                    <span className="description__button" onClick={() => setEditEnabled(false)}>Cancel</span>
                                    <span className="description__button" onClick={() => hanldeSaveDescription()}>Save</span>
                                </span>
                            </div>
                        </div>
                        :
                        <div>
                            {description === ''
                                ?
                                <div className="sidebarP__description--1">
                                    <span className="sidebarP__description--add" onClick={() => setEditEnabledHandler()}><i className="fas fa-plus-square"></i></span>
                                    <label className="sidebarP__description--add" onClick={() => setEditEnabledHandler()}>Add Description</label>
                                </div>
                                :
                                <div className="sidebarP__description--2">
                                    <div className="description__text">{description}</div>
                                    <span className="description__edit-icon" onClick={() => setEditEnabledHandler()}><i className="far fa-edit"></i></span>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>

            {/* This is Postmortem Page's Sidebar Tab which include Comments & File Information Tabs */}
            <TabsP className="tabs">
                {/* Comments Tab Content */}
                <div label="Comments">
                    <div id="comments" className="comments">
                        <div className="comments__head">

                        </div>

                        <div className="comments__body">
                            {comments ? comments.map((comment, i) =>
                                <CommentP comment={comment} key={comment._id} />
                            )
                                : null
                            }
                        </div>
                    </div>
                </div>

                {/* File Information Tab Content */}
                <div label="File Information">
                    <div className="file-info">
                        <table className="file-info__table">
                            <tbody>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">File Name</td>
                                    <td className="file-info__table--content">Full Spot - Graded.mp4</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Uploader</td>
                                    <td className="file-info__table--content">Emery</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Upload Date</td>
                                    <td className="file-info__table--content">3d ago at 2:34pm</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Codec</td>
                                    <td className="file-info__table--content">AVC</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">RES</td>
                                    <td className="file-info__table--content">1920 x 1080</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">FPS</td>
                                    <td className="file-info__table--content">23.976</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Audio</td>
                                    <td className="file-info__table--content">AAC</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Size</td>
                                    <td className="file-info__table--content">534.45 MB</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">TC In</td>
                                    <td className="file-info__table--content">00:00:00:00</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">TC Out</td>
                                    <td className="file-info__table--content">00:01:24:21</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Duration</td>
                                    <td className="file-info__table--content">01:25.01</td>
                                </tr>
                                <tr className="file-info__table--row">
                                    <td className="file-info__table--name">Frames</td>
                                    <td className="file-info__table--content">2037</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </TabsP>
        </div >
    )
}

var mapStateToProps = (state) => ({
    comments: state.assets && state.assets.comments
})

export default connect(mapStateToProps, null)(SidebarP)
