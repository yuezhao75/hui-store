import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="g-header">
                    <Link className="u-a" to="/home">home</Link>
                </div>
                <div className="g-content">
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default Header