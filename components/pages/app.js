import React, { Component, PropTypes } from 'react';
import './app.scss';
//import Header from '../shared/header';
//import Footer from '../shared/footer';

class App extends Component{
    static displayName = 'App';
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div>
                <div>
                    HEADER GOES HERE
                </div>
                <div>
                    {/* Render Main Content */}
                    {this.props.children}
                </div>
                <div>
                    FOOTER GOES HERE
                </div>
            </div>
        );
    }
}

export default App;
