import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FirstPage from '../features/firstPage/FirstPage';

const App: FC = () => (
    <Switch>
        <Route path="/">
            <FirstPage />
        </Route>
        <Redirect to="/" />
    </Switch>
);

export default App;
