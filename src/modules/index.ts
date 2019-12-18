import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import search, { sagas as searchSagas } from './Search';

export default combineReducers({
	search
});

export function* rootSaga() {
	yield fork(searchSagas);
}
