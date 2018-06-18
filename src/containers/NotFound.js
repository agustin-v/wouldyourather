import React from 'react'

import Paper from 'material-ui/Paper';

const NotFound = () => {
    return (
        <div className='container'>
            <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                Not found... :/
            </Paper>
        </div>
    )
}

export default NotFound