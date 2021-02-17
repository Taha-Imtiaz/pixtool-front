import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './DropdownMenus.scss';

import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';

function Dropdown(props) {
    return (
        <Navbar text={props.text}>
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
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
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <span className="icon-arrow" onClick={() => setOpen(!open)}>
                {props.icon}
            </span>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offSetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <span className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button icon-right">{props.rightIcon}</span>
            </span>
        );
    }

    return (
        <div className="dropdown" /* style={{ height: menuHeight }} ref={dropdownRef} */>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">Back</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Dropdown
