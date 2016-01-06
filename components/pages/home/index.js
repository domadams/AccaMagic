import React from 'react';
import Base from '../../base';
import DocumentTitle from 'react-document-title';
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
                        <p>
                            Login goes here
                        </p>
                    </div>
                    <div className="intro col">
                        <p>
                            Bacon ipsum dolor amet pig spare ribs ribeye cow, biltong pastrami sausage porchetta. Filet mignon sausage bacon, short ribs venison bresaola turducken andouille. Short ribs spare ribs cow sirloin. Biltong pork brisket, frankfurter sausage tri-tip shank sirloin capicola porchetta chuck. Ham hock ham cow meatloaf filet mignon meatball. Shoulder cupim frankfurter chuck, tenderloin meatloaf rump salami andouille.
                        </p>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;
