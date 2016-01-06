import React, { PropTypes } from 'react';
import Base from '../../base';
import './footer.scss';

class Footer extends Base {
    static displayName = 'Footer';

    render() {
        return (
            <footer className="footer">
                <span>
                    {`${this.t('copyright')} `} &copy; {` ${new Date().getFullYear()} ${this.t('acca-magic-com')} | `}
                    {this.t('built-by')} <a href="http://www.dominic-adams.com">Dominic Adams</a>
                </span>
            </footer>
        );
    }
}

export default Footer;
