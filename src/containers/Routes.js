import React from 'react';
import { withRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Question from './Question'

const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/questions/:question_id' component={Question}/>
            </Switch>
        </main>
    )
}

export default withRouter(Routes)