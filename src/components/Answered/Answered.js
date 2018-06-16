import React from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Answered = ({ answer, votes, percentage }) => {
    return (
        <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
            <div>
                <RaisedButton label={answer} disabled={true} />
                <div>Votes: {votes}</div>
                <div>Percentage: {percentage}</div>
            </div>
        </Paper>
    )
}

export default Answered