import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import countAgeReducer from './store/CountAge';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchAgeUp } from './saga/saga';
const sagaMiddleware = createSagaMiddleware();

const reducer = countAgeReducer;

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
