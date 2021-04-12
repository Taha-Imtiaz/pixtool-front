import { React, useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addDescription } from '../../../Redux/assets/assetActions';
import TimeAgo from 'react-timeago';

import './SidebarP.scss';

import TabsP from '../NavigationTabsP/TabsP';
import CommentP from '../../PlayerComponents/CommentP/CommentP';

function SidebarP({ asset, comments, open, addDescription, getDescription, assetDescription, match: { params: { assetId } }, setPlay }) {

    // States For Video Description On Player Sidebar 
    const [enableEditor, setEnableEditor] = useState(false);
    const [description, setDescription] = useState('');
    const [tempDescription, setTempDescription] = useState('');

    // Description TextArea Change Handler 
    const textAreaChangeHandler = (event) => {
        const value = event.target.value;
        setTempDescription(value);
    }

    // For Opening The Edit Description TextArea
    const editDescription = () => {
        setEnableEditor(true)
        setTempDescription(description)
    }

    // For Saving The Description, Typed In TextArea
    const saveDescription = () => {
        setEnableEditor(false);
        setDescription(tempDescription);

        let obj = {
            "description": tempDescription, // Although description is already set a step before. But I sended tempDescription because setting state takes time.
        }
        addDescription(obj, asset._id);
    }

    // For Getting The Saved Description, From Backend
    useEffect(() => {
        // getDescription(assetId);
        if (asset) {
            setDescription(asset.description);
        } else {
            setDescription('');
        }

    }, [asset])

    // Function To Set The Height Of Comment Area Of SidebarP
    const setCommentsHeight = () => {
        let windowHeight = window.innerHeight;
        let sidebarPHead = document.getElementById('sidebarPHead');
        let comments = document.getElementById('comments');
        let tabListP = document.querySelector('.tab-listP');
        let headerP = document.querySelector('.headerP');
        let sidebarHeadHeight;

        if (windowHeight && sidebarPHead && comments && tabListP && headerP) {
            sidebarHeadHeight = (windowHeight - (sidebarPHead.offsetHeight + tabListP.offsetHeight + headerP.offsetHeight)).toString();
            comments.style.maxHeight = (sidebarHeadHeight + 'px');
        }
    }

    // To Set The Height Of Comment Area Of SidebarP
    useEffect(() => {
        let sidebarP = document.getElementById('sidebarP');
        let comments = document.getElementById('comments');
        if (sidebarP && comments) {
            setCommentsHeight();
            window.addEventListener('load', setCommentsHeight, false);
            sidebarP.addEventListener('click', setCommentsHeight, false);
        }

    }, [])


    return (
        <div id="sidebarP" className={open ? 'sidebarP' : 'sidebarP sidebarPCollapse'}>
            <div id="sidebar-overlay" className={open ? '' : 'sidebarP__overlay'}></div>
            <div id="sidebarPHead" className="sidebarP__head">
                <div className="sidebarP__info">
                    {asset && asset.asset_info ?
                        <Fragment>
                            <div className="sidebarP__info-name">{asset.asset_info.uploader}</div>
                            <div className="sidebarP__info-time">
                                Uploaded <TimeAgo date={asset.createdAt} minPeriod={10} />
                            </div>
                        </Fragment>
                        : null
                    }
                </div>

                <div className="sidebarP__description">
                    {!enableEditor ?
                        <Fragment>
                            {description === ''
                                ?
                                <div className="sidebarP__description--1">
                                    <span className="sidebarP__description--add" onClick={() => editDescription()}><i className="fas fa-plus-square"></i></span>
                                    <label className="sidebarP__description--add" onClick={() => editDescription()}>Add Description</label>
                                </div>
                                :
                                <div className="sidebarP__description--2">
                                    <div className="description__text">{asset.description}</div>
                                    <span className="description__edit-icon" onClick={() => editDescription()}><i className="far fa-edit"></i></span>
                                </div>
                            }
                        </Fragment>
                        :
                        <Fragment>
                            <div className="sidebarP__description--3">
                                <textarea className="description__text-area" name="descriptiontext" onChange={(e) => textAreaChangeHandler(e)} value={tempDescription}></textarea>
                                <span className="description__buttons">
                                    <span className="description__button" onClick={() => setEnableEditor(false)}>Cancel</span>
                                    <span className="description__button" onClick={() => saveDescription()}>Save</span>
                                </span>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>

            {/* This is Player Page's Sidebar Tab which include Comments & File Information Tabs */}
            <TabsP className="tabs">
                {/* Comments Tab Content */}
                <div label="Comments">
                    <div id="comments" className="comments">
                        <div className="comments__head"></div>

                        <div className="comments__body">
                            {comments ? comments.map((comment) =>
                                <CommentP comment={comment} key={comment._id} setPlay={setPlay} />
                            )
                                : null
                            }
                        </div>
                    </div>
                </div>

                {/* File Information Tab Content */}
                <div label="File Information">
                    <div className="file-info">
                        {asset ?
                            <table className="file-info__table">
                                <tbody>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">File Name</td>
                                        <td className="file-info__table--content">{asset?.name}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Uploader</td>
                                        <td className="file-info__table--content">{asset?.uploader}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Uploaded</td>
                                        <td className="file-info__table--content">{asset?.createdAt.split('T')[0]} at {asset?.createdAt.split('T')[1].split('.')[0]}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Codec</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.codec}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">RES</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.resolution}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">FPS</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.fps}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Audio Format</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.audio_format}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Size</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.file_size} </td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">TC In</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.tc?.tc_in}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">TC Out</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.tc?.tc_out}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Duration</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.duration}</td>
                                    </tr>
                                    <tr className="file-info__table--row">
                                        <td className="file-info__table--name">Frames</td>
                                        <td className="file-info__table--content">{asset?.asset_info?.frames}</td>
                                    </tr>
                                </tbody>
                            </table>
                            : null
                        }
                    </div>
                </div>
            </TabsP>
        </div >
    )
}

var mapStateToProps = (state) => ({
    comments: state.assets && state.assets.comments,
    assetDescription: state.assets && state.assets.description && state.assets.description.description
})

var mapDispatchToProps = {
    addDescription,
    // getDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SidebarP))
