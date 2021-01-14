import {
  FETCH_POSTINGS_BY_DEPARTMENT,
  FETCH_POSTINGS_BY_DEPARTMENT_SUCCESS,
  FETCH_POSTINGS_BY_DEPARTMENT_FAILURE,
} from "../actions/types";

const initialState = {
  postingsDepartment: [],
  loading: false,
  error: null,
};

export default function postingsDepartmentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTINGS_BY_DEPARTMENT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTINGS_BY_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        postingsDepartment: action.postingsDepartment,
      };

    case FETCH_POSTINGS_BY_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
