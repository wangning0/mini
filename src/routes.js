import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

const routes = (history) => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="graph"
                    getComponent={(location, cb) => {
                        import('./containers/Graph').then(loadRoute(cb)).catch(errorLoading);
                    }}
                />
                <Route path="answer/:bId/:username/:cur_username"
                    getComponent={(location, cb) => {
                        import('./containers/Answer').then(loadRoute(cb)).catch(errorLoading);
                    }}
                />
                <Route path="friends"
                    getComponent={(location, cb) => {
                        import('./containers/Friends').then(loadRoute(cb)).catch(errorLoading);
                    }}
                />
                <Route path="unread"
                    getComponent={(location, cb) => {
                        import('./containers/UnRead').then(loadRoute(cb)).catch(errorLoading);
                    }}
                />
                <Route path="my"
                    getComponent={(location, cb) => {
                        import('./containers/My').then(loadRoute(cb)).catch(errorLoading);
                    }}
                />
            </Route>
            <Route path="/init"
                getComponent={(location, cb) => {
                    import('./containers/Init/').then(loadRoute(cb)).catch(errorLoading);
                }}
            />
            <Route path="chat/:userId/:id/:friend"
                getComponent={(location, cb) => {
                    import('./containers/Chat').then(loadRoute(cb)).catch(errorLoading);
                }}
            />
            <Route path="settag/:type"
                getComponent={(location, cb) => {
                    import('./containers/Settag').then(loadRoute(cb)).catch(errorLoading);
                }}
            />
        </Router>
    )
}

export default routes;
