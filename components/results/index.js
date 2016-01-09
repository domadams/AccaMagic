import React from 'react';
import Base from '../base';
import './results.scss';

class Results extends Base {
    static displayName = 'Results';
    render() {
        return (
            <div className="results">
                <h3>{this.t('latest-results')}</h3>
            </div>
        );
    }
}

export default Results;
