import {
  FETCH_DEPARTMENT,
  FETCH_DEPARTMENT_SUCCESS,
  FETCH_DEPARTMENT_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchDepartmentBegin = () => ({
  type: FETCH_DEPARTMENT,
});

export const fetchDepartmentSuccess = (departments) => ({
  type: FETCH_DEPARTMENT_SUCCESS,
  departments: departments.content.map((data) => ({
    id: data.id,
    name: data.label,
  })),
});

export const fetchDepartmentFailure = (error) => ({
  type: FETCH_DEPARTMENT_FAILURE,
  payload: { error },
});

export function fetchDepartment() {
  return async (dispatch) => {
    dispatch(fetchDepartmentBegin());
    await accountService
      .getAllDepartments()
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchDepartmentSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchDepartmentFailure(error)));
  };
}
