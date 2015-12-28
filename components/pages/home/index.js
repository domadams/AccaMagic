import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Home extends Component{
    static displayName = 'Home';
    render() {
        return (
            <DocumentTitle title="Acca Magic | Home">
                <div className="home-component">
                    <div className="intro">
                        <h2 className="main-title">Acca Magic</h2>
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
