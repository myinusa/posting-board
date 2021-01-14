import {
  FETCH_POSTINGS_BY_ID,
  FETCH_POSTINGS_BY_ID_SUCCESS,
  FETCH_POSTINGS_BY_ID_FAILURE,
} from "../actions/types";

const initialState = {
  postings: {},
  loading: false,
  error: null,
};

export default function postingsIDReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTINGS_BY_ID:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTINGS_BY_ID_SUCCESS:
      // return {
      //   ...state,
      //   loading: false,
      //   postings: action.postings,
      // };
      return Object.assign({}, state, { loading: false, postings: action.postings });

    case FETCH_POSTINGS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
