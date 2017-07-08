import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import thunkMiddleware from 'redux-thunk';

import graph from './containers/Graph/reducer';
import userInfo from './reducer';
import init from './containers/Init/reducer';
import answer from './containers/Answer/reducer';
import friends from './containers/Friends/reducer';
import chat from './containers/Chat/reducer';
import unread from './containers/UnRead/reducer';
import my from './containers/My/reducer';

const reducer = combineReducers({
    userInfo,
    graph,
    init,
    answer,
    friends,
    chat,
    unread,
    my
});

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export default store;