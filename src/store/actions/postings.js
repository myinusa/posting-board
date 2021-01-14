import {
  FETCH_POSTINGS,
  FETCH_POSTINGS_SUCCESS,
  FETCH_POSTINGS_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchPostingsBegin = () => ({
  type: FETCH_POSTINGS,
});

export const fetchPostingsSuccess = (postings) => ({
  type: FETCH_POSTINGS_SUCCESS,
  //   postings,
  postings: postings.content.map((data) => ({
    id: data.id,
    name: data.name,
    city: data.location.city,
    countryCode: data.location.country,
    country: data.customField[1].valueLabel,
    department: data.department.label,
  })),
});

export const fetchPostingsFailure = (error) => ({
  type: FETCH_POSTINGS_FAILURE,
  payload: { error },
});

export function fetchPostings() {
  return async (dispatch) => {
    dispatch(fetchPostingsBegin());
    await accountService
      .getAllPostings()
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchPostingsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPostingsFailure(error)));
  };
}
