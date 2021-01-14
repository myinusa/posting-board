import {
  FETCH_POSTINGS_BY_DEPARTMENT,
  FETCH_POSTINGS_BY_DEPARTMENT_SUCCESS,
  FETCH_POSTINGS_BY_DEPARTMENT_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchPostingsByDepartmentBegin = () => ({
  type: FETCH_POSTINGS_BY_DEPARTMENT,
});

export const fetchPostingsByDepartmentSuccess = (postingsDepartment) => ({
  type: FETCH_POSTINGS_BY_DEPARTMENT_SUCCESS,
  //   postings,
  postingsDepartment: postingsDepartment.content.map((data) => ({
    id: data.id,
    name: data.name,
    city: data.location.city,
    countryCode: data.location.country,
    country: data.customField[1].valueLabel,
    department: data.department.label,
  })),
});

export const fetchPostingsByDepartmentFailure = (error) => ({
  type: FETCH_POSTINGS_BY_DEPARTMENT_FAILURE,
  payload: { error },
});

export function fetchPostingsByDepartment(department) {
  return async (dispatch) => {
    dispatch(fetchPostingsByDepartmentBegin());
    await accountService
      .getPostingsByDepartment(department)
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchPostingsByDepartmentSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPostingsByDepartmentFailure(error)));
  };
}
