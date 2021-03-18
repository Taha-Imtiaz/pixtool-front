import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './DropdownMenus.scss';

import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
// import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { Fragment } from 'react';

function Dropdown(props) {
    return (
        <Navbar text={props.text}>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu menuItems={props.menuItems} ></DropdownMenu>
            </NavItem>
        </Navbar>
    )
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.text} {props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    // State For Dropdowns toggling
    const [open, setOpen] = useState(false);

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
            setTimeout(() => {

            });
        }
    }

    return (
        <li id="nav-item" className="nav-item" /* onClick={setDropdownPosition} */>
            <span className="icon-arrow" onClick={() => setOpen(!open)}>
                {props.icon}
            </span>

            {open && props.children}
        </li>
    );
}

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');


    function DropdownItem(props) {
        return (
            <span className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {/* <input type = "file" value =  /> */}
                {/* <input type = "file" value = {props.children} />  */}
                {props.upload.value ? <Fragment>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        {props.children}
                    </label>
                    <input id="file-upload" type="file" className="dropdown__uploadInput inputTag" onChange={(e) => props.upload.onUpload(e)} accept="video/*" />
                </Fragment> : props.children}
                <span className="icon-button icon-right">{props.rightIcon}</span>
            </span>
        );
    }

    return (
        <div className="dropdown ">
            <div>
                <CSSTransition
                    in={activeMenu === 'main'}
                    unmountOnExit
                    timeout={500}
                    classNames="menu-primary"
                >
                    <div className="menu">
                        {props.menuItems.map((x, i) => (
                            <DropdownItem
                                rightIcon={x.rightIcon}
                                upload={x.isUpload}
                                leftIcon={x.leftIcon}
                                goToMenu={x.goToMenu}
                                key={i}>

                                {x.value}
                            </DropdownItem>
                        ))}

                        {/* <DropdownItem
                            rightIcon={<ChevronIcon />}
                            goToMenu="settings"
                        >
                            Settings
                        </DropdownItem> */}
                    </div>
                </CSSTransition>

                {props.menuItems.map((x, i) => (x.goToMenu ? <CSSTransition
                    in={activeMenu === x.goToMenu}
                    unmountOnExit
                    timeout={500}
                    classNames="menu-secondary"

                >
                    <div className="menu">
                        <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">Back</DropdownItem>
                        {x.child.map((y, j) => <DropdownItem>{y.value}</DropdownItem>)}
                    </div>
                </CSSTransition> : null
                ))}
                {/* <CSSTransition
                    in={activeMenu === 'settings'}
                    unmountOnExit
                    timeout={500}
                    classNames="menu-secondary"
                    // onEnter={calcHeight}
                >
                    <div className="menu">
                        <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">Back</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                    </div>
                </CSSTransition> */}

            </div>
        </div>
    );
}

export default Dropdown
