import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './DropdownMenus.scss';

import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
// import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

// import $ from 'jquery';

function Dropdown(props) {


    return (
        <Navbar text={props.text}>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu menuItems={props.menuItems}></DropdownMenu>
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

    // To Close the Dropdowns whenever click outside them
    useEffect(() => {

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
    }, [open])

    /* useEffect(() => {

        function dropdownPositionHandler(event) {
            let windowHeight = $(window).height();
            let dropdownOffsetTop = document.querySelector('.dropdown').offset().top;
            let dropdownHeight = document.querySelector('.dropdown').height();
            debugger;

            if (windowHeight < (dropdownOffsetTop + dropdownHeight)) {
                document.querySelector('.dropdown').css("top", (dropdownOffsetTop - dropdownHeight));
            } else {
                document.querySelector('.dropdown').css("top", dropdownHeight);
            }
        }
        document.querySelector('.nav-item').addEventListener("click", dropdownPositionHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]) */

    return (
        <li className="nav-item">
            <span className="icon-arrow" onClick={() => setOpen(!open)}>
                {props.icon}
            </span>

            {open && props.children}
        </li>
    );
}

function DropdownMenu(props) {
    console.log(props)
    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        console.log(props.children)
        return (
            <span className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button icon-right">{props.rightIcon}</span>
            </span>
        );
    }

    return (
        <div className="dropdown">
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
                                leftIcon={x.leftIcon}
                                goToMenu={x.goToMenu}>
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
