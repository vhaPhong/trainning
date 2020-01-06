import { fork } from 'redux-saga/effects';
import { getUser, getUser2 } from './FetchApi';

export default function* rootSaga() {
	yield fork(getUser);
	yield fork(getUser2);
}
