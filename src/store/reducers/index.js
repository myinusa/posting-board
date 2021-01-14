import { combineReducers } from "redux";

import postingsReducer from "./postingsReducer";
import departmentsReducer from "./departmentsReducer";
import countriesReducer from "./countriesReducer";
import postingsCountryReducer from "./postingsCountryReducer";
import postingsIDReducer from "./postingsIDReducer";
import postingsDepartmentReducer from "./postingsDepartmentReducer";

const rootReducer = combineReducers({
  postings: postingsReducer,
  departments: departmentsReducer,
  countries: countriesReducer,
  postingsCountry: postingsCountryReducer,
  postingsID: postingsIDReducer,
  postingsDepartment: postingsDepartmentReducer,
});

export default rootReducer;
