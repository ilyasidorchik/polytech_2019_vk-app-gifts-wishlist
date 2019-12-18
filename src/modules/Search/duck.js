import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as constants from './constants';

export const fetchSearchSuggestionsRequest = createAction(
	constants.FETCH_SEARCH_REQUEST
);
export const fetchSearchSuggestionsSuccess = createAction(
	constants.FETCH_SEARCH_SUCCESS
);
export const fetchSearchSuggestionsFailure = createAction(
	constants.FETCH_SEARCH_FAILURE
);

const searchSuggestions = handleActions(
	{
		[fetchSearchSuggestionsRequest]: () => null,
		[fetchSearchSuggestionsSuccess]: (_state, action) => action.payload,
		[fetchSearchSuggestionsFailure]: (_state, action) => action.payload
	},
	null
);

export default combineReducers({
	searchSuggestions
});
