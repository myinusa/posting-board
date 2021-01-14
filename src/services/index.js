export const accountService = {
  getPostingsByCountry,
  getAllCountries,
  getAllPostings,
  getAllDepartments,
  getPostingsByID,
  getPostingsByDepartment,
};

function getAllCountries() {
  return fetch("https://restcountries.eu/rest/v2/all");
}

function getAllPostings() {
  return fetch(
    "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings"
  );
}

function getPostingsByID(id) {
  return fetch(
    `https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/${id}`
  );
}

function getAllDepartments() {
  return fetch(
    "https://api.smartrecruiters.com/v1/companies/smartrecruiters/departments"
  );
}

function getPostingsByCountry(query) {
  return fetch(
    `https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings?&country=${query}`
  );
}

function getPostingsByDepartment(query) {
  return fetch(
    `https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings?&department=${query}`
  );
}
