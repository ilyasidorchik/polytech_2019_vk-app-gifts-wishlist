import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as constants from './constants';

export const fetchSearchSuggestionsRequest = createAction(
	constants.FETCH_SEARCH_SUGGESTIONS_REQUEST
);
export const fetchSearchSuggestionsSuccess = createAction(
	constants.FETCH_SEARCH_SUGGESTIONS_SUCCESS
);
export const fetchSearchSuggestionsFailure = createAction(
	constants.FETCH_SEARCH_SUGGESTIONS_FAILURE
);

export const fetchSearchResultsRequest = createAction(
	constants.FETCH_SEARCH_RESULTS_REQUEST
);
export const fetchSearchResultsSuccess = createAction(
	constants.FETCH_SEARCH_RESULTS_SUCCESS
);
export const fetchSearchResultsFailure = createAction(
	constants.FETCH_SEARCH_RESULTS_FAILURE
);

const searchSuggestions = handleActions(
	{
		[fetchSearchSuggestionsRequest]: () => null,
		[fetchSearchSuggestionsSuccess]: (_state, action) => action.payload,
		[fetchSearchSuggestionsFailure]: (_state, action) => action.payload
	},
	null
);

const searchResults = handleActions(
	{
		[fetchSearchResultsRequest]: () => null,
		[fetchSearchResultsSuccess]: (_state, action) => action.payload,
		[fetchSearchResultsFailure]: (_state, action) => action.payload
	},
	null
);

export default combineReducers({
	searchSuggestions,
	searchResults
});
