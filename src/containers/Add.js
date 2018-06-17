import React from 'react'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Add = () => {
    return (
        <div className='container'>
            <Paper style={ {textAlign: 'jsutify', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                <h2>Add a new poll</h2>
                <form>
                    <div className='row'>
                        <div className='col-md-6'>
                            <TextField
                                hintText="Option one"
                                underlineFocusStyle={{color: '#00bcd4'}}
                                fullWidth={true}
                            />
                        </div>
                        <div className='col-md-6'>
                            <TextField
                                hintText="Option two"
                                underlineFocusStyle={{color: '#00bcd4'}}
                                fullWidth={true}
                                primary={true}
                            />
                        </div>
                    </div>
                    <div style={ {textAlign: 'right'} }>
                        <RaisedButton label='Create poll' style={{ margin: '10px' }}/>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Add