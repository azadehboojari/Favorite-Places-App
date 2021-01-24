import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import NewPlace from './places/pages/NewPlace';
import Place from './places/components/Place';
import React from 'react';
import Users from './user/pages/Users';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Place />
                    </Route>

                    <Route path="/places/new" exact>
                        <NewPlace />
                    </Route>
                    <Route path="/user" exact>
                        <Users />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>


        </Router>

    )
}
export default App;