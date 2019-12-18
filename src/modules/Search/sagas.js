import { takeLatest, call, put } from 'redux-saga/effects';

import {
	fetchSearchSuggestionsRequest,
	fetchSearchSuggestionsSuccess,
	fetchSearchSuggestionsFailure
} from './duck';
import { getSearchSuggestions } from './api';

function* fetchSearchSuggestionsWatcher() {
	yield takeLatest(fetchSearchSuggestionsRequest, fetchSearchSuggestionsFlow);
}

function* fetchSearchSuggestionsFlow(action) {
	try {
		const { searchParams } = action.payload;

		const searchSuggestions = yield call(
			getSearchSuggestions,
			searchParams
		);

		yield put(fetchSearchSuggestionsSuccess(searchSuggestions));
	} catch (error) {
		yield put(fetchSearchSuggestionsFailure(error));
	}
}

export default function*() {
	yield fetchSearchSuggestionsWatcher();
}
