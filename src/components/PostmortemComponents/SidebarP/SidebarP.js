import React from 'react';
import './SidebarP.scss';
import TabsP from '../NavigationTabsP/TabsP';
import CommentP from '../../PostmortemComponents/CommentP/CommentP';

function SidebarP() {
    return (
        <div className="sidebarP">
            <div className="sidebarP__head">
                <div className="sidebarP__info">
                    <span className="sidebarP__info--name">John</span>
                    <span className="sidebarP__info--time">uploaded 3d ago</span>
                </div>

                <div className="sidebarP__description">
                    <a href="./#" className="sidebarP__description--add-btn txt-dec-none"><i class="fas fa-plus-square"></i></a>
                    <label className="sidebarP__description--add-label">Add Description</label>
                </div>
            </div>

            {/* This is Postmortem Page's Sidebar Tab which include Comments & File Information Tabs */}
            <TabsP className="tabs">

                {/* Comments Tab Content */}
                <div label="Comments">
                    <div className="comments">
                        <div className="comments__head">

                        </div>

                        <div className="comments__body">
                            <CommentP />
                            <CommentP />
                            <CommentP />
                            <CommentP />
                            <CommentP />
                            <CommentP />
                            <CommentP />
                        </div>
                    </div>
                </div>

                {/* File Information Tab Content */}
                <div label="File Information">
                    <div className="file-info">
                        <table className="file-info__table">
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
                        </table>
                    </div>
                </div>
            </TabsP>
        </div>
    )
}

export default SidebarP
