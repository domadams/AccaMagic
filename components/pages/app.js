import React, { Component, PropTypes } from 'react';
import './app.scss';
import Header from '../shared/header';
import Footer from '../shared/footer';

class App extends Component{
    static displayName = 'App';
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div className="row">
                    {/* Render Main Content */}
                    {this.props.children}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
