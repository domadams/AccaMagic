import React from 'react';
import Base from '../../base';
import DocumentTitle from 'react-document-title';
import Login from '../../login-form';
import './home.scss';

class Home extends Base {
    static displayName = 'Home';
    render() {
        return (
            <DocumentTitle title="Acca Magic | Home">
                <div className="home-component">
                    <div className="col">
                        <h2 className="main-title">{this.t('slogan')}</h2>
                    </div>
                    <div className="login-wrapper col">
                        <Login />
                    </div>
                    <div className="intro col">
                        <h3>{this.t('intro-header-one')}</h3>
                        <p>
                            {this.t('intro-paragraph-one')}
                        </p>
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-two')}} />
                        <h3>{this.t('intro-header-two')}</h3>
                        <p>
                            {this.t('intro-paragraph-three')}
                        </p>
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-four')}} />
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-five')}} />
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-six')}} />
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-seven')}} />
                        <p dangerouslySetInnerHTML={{__html: this.t('intro-paragraph-eight')}} />
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
