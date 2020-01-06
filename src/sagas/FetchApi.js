import { put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action';

function* fetchApiUser() {
	const person = yield fetch('https://randomuser.me/api/').then((response) => response.json());
	yield put({ type: actionTypes.GET_API_USER, value: person });
}

export function* getUser() {
	yield takeLatest(actionTypes.GET_USER, fetchApiUser);
}

function* fetchApiUser2() {
	const person2 = yield fetch('https://randomuser.me/api/').then((results) => results.json());
	yield put({ type: actionTypes.GET_API_USER2, data: person2 });
}

export function* getUser2() {
	yield takeLatest(actionTypes.GET_USER2, fetchApiUser2);
}
