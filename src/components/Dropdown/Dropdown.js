import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router';

import './Dropdown.scss';

import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
// import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { Fragment } from 'react';


function Dropdown({ text, menuItems, setCommentPrivacy, addDescription, setAssetPrivacy, match: { params: { assetId } }, history, setShowConfirm }) {

    // State For Dropdowns toggling
    const [open, setOpen] = useState(false);
    // State For Dropdown Text
    const [dropText, setDropText] = useState(text)

    // Function to check which dropdown value is Clicked
    const checkClick = (option) => {

        try {
            // Check For Comment Privacy
            if (option === 'Everyone can see') {
                setCommentPrivacy('public');

            } else if (option === 'Team only') {
                setCommentPrivacy('private');
            }

            // Check For Video status
            if (option === 'Needs Review') {
                let obj = {
                    "status": "needs_review"
                }

                addDescription(obj, assetId);

            } else if (option === 'In Progress') {
                let obj = {
                    "status": "in_progress"
                }

                addDescription(obj, assetId);

            } else if (option === 'Approved') {
                let obj = {
                    "status": "approved"
                }

                addDescription(obj, assetId);
            }

            setDropText(option);

        } catch (err) {
            window.alert(err.message);
        }

        try {
            // Check For Video Privacy
            if (option === 'Make Private' || option === 'Make Public') {
                setAssetPrivacy();
            }

            // Check For Reveal In Project
            if (option === 'Reveal in project') {
                window.open(window.location.origin, "_blank");
            }

            // Check For Asset Delete
            if (option === 'Delete') {
                /* deleteAssets(assetId);
                history.goBack() */
                setShowConfirm(true);
            }

            setOpen(!open);

        } catch (err) {
            window.alert(err.message);
        }
    }

    // Function To Position Dropdown Upwards/ Downwards w.r.t. Space Available
    const setDropdownPosition = () => {
        if (document.querySelector('.dropdown')) {
            let windowHeight = window.innerHeight;
            let myDropdown = document.querySelector('.dropdown');
            let dropdownHeight = myDropdown.offsetHeight;
            let dropdownTop = myDropdown.getBoundingClientRect().top;
            let space = windowHeight - dropdownTop - dropdownHeight;

            if (space > dropdownHeight) {
                myDropdown.style.top = '4.2rem';

            } else {
                myDropdown.style.top = '-11rem';
            }
        }
    }

    // To Close the Dropdowns whenever click outside them &  set position of Dropdown Menu
    useEffect(() => {
        // To Close the Dropdowns whenever click outside them
        function handleClickEvent(event) {

            if (!open) {
            } else {
                // Get parent element and check if click happened outside parent only
                const parent = document.querySelector(".dropdown");
                if (open && parent && !parent.contains(event.target)) {
                    setOpen(!open);
                }
            }
        }
        document.querySelector('.page-wrapper').addEventListener("click", handleClickEvent);
        // eslint-disable-next-line react-hooks/exhaustive-deps

        // This Function Sets The Position Of Dropdown Menu As Soon As The Open State Becomes True (Changes)
        setDropdownPosition();

    }, [open])


    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {dropText}
                <li id="nav-item" className="nav-item">
                    <span className="icon-arrow" onClick={() => setOpen(!open)}>
                        {<CaretIcon />}
                    </span>

                    {open && <DropdownMenu menuItems={menuItems} checkClick={checkClick} ></DropdownMenu>}
                </li>
            </ul>
        </nav>
    )
}


function DropdownMenu({ menuItems, checkClick }) {
    const [activeMenu, setActiveMenu] = useState('main');


    function DropdownItem(props) {
        return (
            <span className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.upload !== undefined && props.upload.value === true ?
                    <Fragment>
                        <label htmlFor="file-upload" className="custom-file-upload" >
                            {props.children}
                        </label>
                        <input id="file-upload" type="file" className="dropdown__uploadInput inputTag" onChange={(e) => props.upload.onUpload(e)} accept="video/*" />
                    </Fragment>
                    :
                    props.upload !== undefined && props.upload.value === false ?
                        <Fragment>
                            <label htmlFor="folder-upload" className="custom-folder-upload" onClick={() => props.upload.modalToggler()}>
                                {props.children}
                            </label>
                        </Fragment>
                        :
                        <span onClick={() => props.checkClick(props.children)} >{props.children}</span>}
                <span className="icon-button icon-right">{props.rightIcon}</span>
            </span>
        );
    }

    return (
        // DropdownMenu Component
        <div className="dropdown ">
            <div>
                <CSSTransition
                    in={activeMenu === 'main'}
                    unmountOnExit
                    timeout={500}
                    classNames="menu-primary"
                >
                    <div className="menu">
                        {menuItems.map((x, index) => (
                            <DropdownItem
                                rightIcon={x.rightIcon}
                                upload={x.isUpload}
                                leftIcon={x.leftIcon}

                                goToMenu={x.goToMenu}
                                key={index}
                                checkClick={checkClick}
                            >
                                {x.value}
                            </DropdownItem>
                        ))}
                    </div>
                </CSSTransition>

                {menuItems.map((x, index) => (x.goToMenu ?
                    <CSSTransition
                        in={activeMenu === x.goToMenu}
                        unmountOnExit
                        timeout={500}
                        classNames="menu-secondary"
                        key={index}
                    >
                        <div className="menu">
                            <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" checkClick={checkClick}>Back</DropdownItem>
                            {x.child.map((y, index) => <DropdownItem checkClick={checkClick} key={index}>{y.value}</DropdownItem>)}
                        </div>
                    </CSSTransition>
                    :
                    null
                ))}
            </div>
        </div>
    );
}

export default withRouter(Dropdown)
