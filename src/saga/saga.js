import { takeEvery, delay, put } from 'redux-saga/effects';
import * as actionTypes from '../action/action';

function* ageUpAsync() {
	yield delay(4000);
	yield put({ type: actionTypes.AGE_UP_ASYNC, value: 1 });
}

export function* watchAgeUp() {
	yield takeEvery('AGE_UP', ageUpAsync);
}
