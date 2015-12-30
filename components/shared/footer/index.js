import React, { Component, PropTypes } from 'react';
import './footer.scss';

class Footer extends Component{
    static displayName = 'Footer';

    render() {
        return (
            <footer className="footer">
                <span>Copyright &copy; 2016. AccaMagic.com | Built by <a href="http://www.dominic-adams.com">Dominic Adams</a></span>
            </footer>
        );
    }
}

export default Footer;
