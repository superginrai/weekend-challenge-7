import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = [], action) => {
    if (action.type === 'ADD_TO_FEEDBACK') {
        return [...state, action.payload];
    } else if (action.type === 'RESET') {
        return [];
    }
    return state;
};

const allFeedback = (state = [], action) => {
    if (action.type === 'LIST_FEEDBACK') {
        console.log('listing feedback', action);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
        allFeedback,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));