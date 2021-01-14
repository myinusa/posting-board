import {
  FETCH_POSTINGS,
  FETCH_POSTINGS_SUCCESS,
  FETCH_POSTINGS_FAILURE,
} from "../actions/types";

const initialState = {
  postings: [],
  loading: false,
  error: null,
};

export default function postingsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTINGS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        postings: action.postings,
      };

    case FETCH_POSTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
