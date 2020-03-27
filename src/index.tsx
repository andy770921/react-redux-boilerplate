import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './application/App';
import store from './application/store';
import GlobalStyle from './components/GlobalStyle';

render(
    <>
        <GlobalStyle />
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </>,
    document.querySelector('#root')
);
