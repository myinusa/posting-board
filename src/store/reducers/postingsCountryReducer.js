import {
  FETCH_POSTINGS_COUNTRY,
  FETCH_POSTINGS_COUNTRY_SUCCESS,
  FETCH_POSTINGS_COUNTRY_FAILURE,
} from "../actions/types";

const initialState = {
  postingsCountry: [],
  loading: false,
  error: null,
};

export default function postingsCountryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTINGS_COUNTRY:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTINGS_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        postingsCountry: action.postingsCountry,
      };

    case FETCH_POSTINGS_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
