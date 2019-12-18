import { takeLatest, call, put } from 'redux-saga/effects';

import {
	fetchSearchSuggestionsRequest,
	fetchSearchSuggestionsSuccess,
	fetchSearchSuggestionsFailure,
	fetchSearchResultsRequest,
	fetchSearchResultsSuccess,
	fetchSearchResultsFailure
} from './duck';
import { getSearchSuggestions, getSearchResults } from './api';

function* fetchSearchSuggestionsWatcher() {
	yield takeLatest(fetchSearchSuggestionsRequest, fetchSearchSuggestionsFlow);
	yield takeLatest(fetchSearchResultsRequest, fetchSearchResultsFlow);
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

function* fetchSearchResultsFlow(action) {
	try {
		const { searchParams } = action.payload;

		const searchResults = yield call(getSearchResults, searchParams);

		yield put(fetchSearchResultsSuccess(searchResults));
	} catch (error) {
		yield put(fetchSearchResultsFailure(error));
	}
}

export default function*() {
	yield fetchSearchSuggestionsWatcher();
}
