import React from 'react'
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/questionsActions'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom'

class  Add  extends React.Component {

    state = {
        toHome: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const optionOneText = e.target.elements['optionOne'].value;
        const optionTwoText = e.target.elements['optionTwo'].value;
        const author = this.props.user.id
        this.props.dispatch(saveQuestion({optionOneText, optionTwoText, author}))

        this.setState({toHome: true})
    }
    render() {

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='container'>
                <Paper style={ {textAlign: 'jsutify', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                    <h2>Add a new poll</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <TextField
                                    hintText="Option one"
                                    underlineFocusStyle={{color: '#00bcd4'}}
                                    fullWidth={true}
                                    name='optionOne'
                                    required
                                />
                            </div>
                            <div className='col-md-6'>
                                <TextField
                                    hintText="Option two"
                                    underlineFocusStyle={{color: '#00bcd4'}}
                                    fullWidth={true}
                                    name='optionTwo'
                                    required
                                />
                            </div>
                        </div>
                        <div style={ {textAlign: 'right'} }>
                        <button
                            type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = ({authentication, questions, users}) => {
    return {
        user: users[authentication.user]
    }
}

export default connect(mapStateToProps)(Add)