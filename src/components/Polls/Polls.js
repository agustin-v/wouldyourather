import React from 'react'
import { Link } from 'react-router-dom'

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PollIcon from 'material-ui/svg-icons/social/poll';
import Paper from 'material-ui/Paper';

const Poll = ({questions, users}) => {
    return (
        <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
            <List>
                {questions.map((question) => {
                    return <Link key={question.id} to={`/questions/${question.id}`} style={{textDecoration: 'none'}}>
                        <ListItem 
                            primaryText={`${question.author}: would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`} 
                            leftAvatar={<Avatar src={users[question.author].avatarURL} />}
                            rightIcon={<PollIcon />}
                        />
                    </Link>
                })}
            </List>
        </Paper>
    )
}

export default Poll