import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavigationTabs.scss';

import Tab from './Tab';
import { Link } from 'react-router-dom';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props && this.props.children && this.props.children.props && this.props.children.props.children[0] && this.props.children.props.children[0].props.label,
            path: this.props && this.props.children && this.props.children.props && this.props.children.props.children[0] && this.props.children.props.children[0].props.path,

        };
    }

    onClickTabItem = (tab, index) => {
        this.setState({ activeTab: tab });
    }

    render() {
     
        const {
            onClickTabItem,
            props: {
                children: { props: { children } },
            },
            state: {
                activeTab,
            }
        } = this;
        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label, path } = child.props;

                        return (

                            <Link to = {path} key ={label}> 
                             <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                               

                                onClick={onClickTabItem}
                            /></Link>
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}


export default Tabs;