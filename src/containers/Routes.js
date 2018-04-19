import React from 'react';
import { withRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';

const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </main>
    )
}

export default withRouter(Routes)