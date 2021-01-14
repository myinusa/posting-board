import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./types";

import { accountService } from "../../services";

export const fetchCountriesBegin = () => ({
  type: FETCH_COUNTRIES,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  // countries,
  countries: countries.map((data) => ({
    id: data.numericCode,
    name: data.name,
    code: data.alpha2Code,
  })),
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: { error },
});

export function fetchCountries() {
  return (dispatch) => {
    dispatch(fetchCountriesBegin());
    accountService.getAllCountries()
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchCountriesSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchCountriesFailure(error)));
  };
}
