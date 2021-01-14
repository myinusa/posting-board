import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "../actions/types";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.countries,
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
