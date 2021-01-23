import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import Place from './places/components/Place';
import React from 'react';
import UserItem from './user/components/UserItem';
import UserList from './user/components/UserList';
import Users from './user/pages/Users';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Place />
                </Route>

                <Route path="/places/new" exact>
                    <NewPlace />
                </Route>
                <Route path="/user" exact>
                    {/* <UserItem /> */}
                    {/* <UserList /> */}
                    <Users />
                </Route>
                <Redirect to="/" />
            </Switch>

        </Router>

    )
}
export default App;