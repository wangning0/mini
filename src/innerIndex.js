import React from 'react';
import { render } from 'react-dom';
import './index.css';
import routes from './routes';
import store from './store';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

render(
        <MuiThemeProvider>
            <Provider store={store}>
                {routes(browserHistory)}
            </Provider>
        </MuiThemeProvider>,
        document.getElementById('root')
    );
    registerServiceWorker();
