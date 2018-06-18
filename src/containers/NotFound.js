import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import Paper from 'material-ui/Paper';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                    Not found... :/
                </Paper>
            </div>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <FloatingActionButton style={{position: 'absolute', right: '20px', bottom: '20px'}}>
                    <Home />
                </FloatingActionButton>
            </Link>
        </React.Fragment>
    )
}

export default withRouter(NotFound)