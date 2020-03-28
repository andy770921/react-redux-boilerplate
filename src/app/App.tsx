import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FirstFeature from '../features/firstFeature/FirstFeature';

const App: FC = () => (
    <Switch>
        <Route path="/">
            <FirstFeature />
        </Route>
        <Redirect to="/" />
    </Switch>
);

export default App;
