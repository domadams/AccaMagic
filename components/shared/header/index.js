import React, { Component, PropTypes } from 'react';
import './header.scss';

class Header extends Component{
    static displayName = 'Header';

    render() {
        return (
            <header className="header">
                <h1>AccaMagic.com</h1>
            </header>
        );
    }
}

export default Header;
