import React from 'react';
import Base from '../base';
import './login.scss';

class LoginForm extends Base {
    static displayName = 'LoginForm';
    render() {
        return (
            <div className="login-form">
                <h3>{this.t('sign-up')}</h3>
            </div>
        );
    }
}

export default LoginForm;
