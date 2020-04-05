import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FirstFeature from '../features/firstFeature/FirstFeature';

const App: FC = () => (
    <Switch>
        <Route exact path="/">
            {console.log('process.env.PUBLIC_URL-test', process.env.PUBLIC_URL)}
            <FirstFeature />
        </Route>
        <Redirect to="/" />
    </Switch>
);

export default App;
