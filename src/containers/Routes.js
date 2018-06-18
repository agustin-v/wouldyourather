import React from 'react';
import { withRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Question from './Question'
import Add from './Add'
import Leaderboard from './Leaderboard';
import NotFound from './NotFound'

const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/questions/:question_id' component={Question}/>
                <Route exact path='/add' component={Add}/>
                <Route exact path='/leaderboard' component={Leaderboard}/>
                <Route exact path='*' component={NotFound}/>
            </Switch>
        </main>
    )
}

export default withRouter(Routes)