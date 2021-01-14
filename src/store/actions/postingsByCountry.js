import {
  FETCH_POSTINGS_COUNTRY,
  FETCH_POSTINGS_COUNTRY_SUCCESS,
  FETCH_POSTINGS_COUNTRY_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchPostingsByCountryBegin = () => ({
  type: FETCH_POSTINGS_COUNTRY,
});

export const fetchPostingsByCountrySuccess = (postingsCountry) => ({
  type: FETCH_POSTINGS_COUNTRY_SUCCESS,
  //   postings,
  postingsCountry: postingsCountry.content.map((data) => ({
    id: data.id,
    name: data.name,
    city: data.location.city,
    countryCode: data.location.country,
    country: data.customField[1].valueLabel,
    department: data.department.label,
  })),
});

export const fetchPostingsByCountryFailure = (error) => ({
  type: FETCH_POSTINGS_COUNTRY_FAILURE,
  payload: { error },
});

export function fetchPostingsBycountry(country) {
  return async (dispatch) => {
    dispatch(fetchPostingsByCountryBegin());
    await accountService
      .getPostingsByCountry(country)
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchPostingsByCountrySuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchPostingsByCountryFailure(error)));
  };
}
