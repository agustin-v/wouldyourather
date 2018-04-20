import React from 'react';
import CSSModules from 'react-css-modules'

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './loginForm.css'

const LoginForm = () => {
    return(
        <div styleName='login-form'>
            <div><h2>Choose a user:</h2></div>
            <DropDownMenu  style={{width: '50%' }}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
            </DropDownMenu>
        </div>
    )
}

export default CSSModules(LoginForm, styles)