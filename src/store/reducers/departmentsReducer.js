import {
  FETCH_DEPARTMENT,
  FETCH_DEPARTMENT_SUCCESS,
  FETCH_DEPARTMENT_FAILURE,
} from "../actions/types";

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

export default function departmentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEPARTMENT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: action.departments,
      };

    case FETCH_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
