import {
  FETCH_POSTINGS_BY_ID,
  FETCH_POSTINGS_BY_ID_SUCCESS,
  FETCH_POSTINGS_BY_ID_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchPostingsByIDBegin = () => ({
  type: FETCH_POSTINGS_BY_ID,
});

export const fetchPostingsByIDSuccess = (postings) => ({
  type: FETCH_POSTINGS_BY_ID_SUCCESS,
  postings: {
    id: postings.id,
    name: postings.name,
    city: postings.location.city,
    country: postings.customField[1].valueLabel,
    countryCode: postings.location.country,
    jobAd: postings.jobAd,
    jobDescription: postings.jobAd.sections.jobDescription.text,
    qualifications: postings.jobAd.sections.qualifications.text,
  },
});

export const fetchPostingsByIDFailure = (error) => ({
  type: FETCH_POSTINGS_BY_ID_FAILURE,
  payload: { error },
});

export function fetchPostingsByID(postingsID) {
  return async (dispatch) => {
    dispatch(fetchPostingsByIDBegin());
    await accountService
      .getPostingsByID(postingsID)
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchPostingsByIDSuccess(json));
        return json.postings;
      })
      .catch((error) => dispatch(fetchPostingsByIDFailure(error)));
  };
}
