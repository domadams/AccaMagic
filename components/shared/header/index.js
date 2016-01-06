import React, { PropTypes } from 'react';
import Base from '../../base';
import './header.scss';

class Header extends Base{
    static displayName = 'Header';

    render() {
        return (
            <header className="header">
                <h1>{this.t('acca-magic-com')}</h1>
            </header>
        );
    }
}

export default Header;
