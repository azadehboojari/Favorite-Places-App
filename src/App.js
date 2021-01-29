import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import NewPlace from './places/pages/NewPlace';
import React from 'react';
import UserPlaces from './places/pages/UserPlaces'
import Users from './user/pages/Users';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>

                    <Route path="/places/new" exact>
                        <NewPlace />
                    </Route>
                    <Route path='/:userId/places' exact>
                        <UserPlaces />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>


        </Router>

    )
}
export default App;