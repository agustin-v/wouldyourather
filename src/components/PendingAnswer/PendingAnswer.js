import React from 'react';

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const PendingAnswer = ({ avatarURL, optionOne, optionTwo}) => {
    return (
        <React.Fragment>
            <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                <div style={{marginBottom: '20px'}}>
                    <Avatar  src={avatarURL}/> 
                    <span style={{marginLeft: '10px'}}>Would you rather...</span>
                </div>
                <div>
                    <RaisedButton label={optionOne} style={{margin: '10px'}}/> or <RaisedButton label={optionTwo} style={{margin: '10px'}}/>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default PendingAnswer