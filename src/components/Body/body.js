/* eslint-disable no-unused-vars */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCountries } from "../../store/actions/countries";
import { fetchPostings } from "../../store/actions/postings";
import { fetchDepartment } from "../../store/actions/department";
import { fetchPostingsBycountry } from "../../store/actions/postingsByCountry";
import { fetchPostingsByDepartment } from "../../store/actions/postingsByDepartment";
import styles from "../styles/styles.js";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setCountries: false,
      setDepartment: false,
    };
    this.handleOnSelectCountry = this.handleOnSelectCountry.bind(this);
    this.handleOnSelectDepartment = this.handleOnSelectDepartment.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCountries());
    this.props.dispatch(fetchPostings());
    this.props.dispatch(fetchDepartment());
  }

  handleOnSelectCountry(event) {
    this.setState({ setCountries: true });
    this.props.dispatch(fetchPostingsBycountry(event.toLowerCase()));
  }

  handleOnSelectDepartment(event) {
    this.setState({ setDepartment: true });
    this.props.dispatch(fetchPostingsByDepartment(event));
  }

  render() {
    const {
      postings,
      countries,
      departments,
      postingsCountry,
      postingsDepartment,
    } = this.props;
    let countryCodes = countries.map((data) => data.code);
    let postingCountryCode = postings.map((data) =>
      data.countryCode.toUpperCase()
    );
    let filteredCountries = countryCodes.filter((el) =>
      postingCountryCode.includes(el)
    );

    return (
      <>
        <h1 style={styles.h1}>SmartRecruiters Postings List App</h1>
        <div style={styles.Dropdown}>
          <Dropdown>
            <Dropdown.Toggle style={styles.DropdownTitle}>
              Country
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {filteredCountries.map((data, id) => (
                <Dropdown.Item
                  eventKey={data}
                  key={id}
                  onSelect={this.handleOnSelectCountry}
                >
                  {data}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle style={styles.DropdownTitle}>
              Department
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {departments.map((data) => (
                <Dropdown.Item
                  eventKey={data.id}
                  key={data.id}
                  onSelect={this.handleOnSelectDepartment}
                >
                  {data.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div style={styles.textBody}>
          {this.state.setCountries
            ? postingsCountry.map((postingCountries) => (
                <li key={postingCountries.id}>
                  <a
                    href={`/posting/${postingCountries.id}`}
                    style={styles.bodyLink}
                  >
                    <div style={styles.bodyTitle}>{postingCountries.name}</div>
                    <div style={styles.bodySubtitle}>
                      {postingCountries.city}, {postingCountries.country}
                    </div>
                  </a>
                </li>
              ))
            : this.state.setDepartment
            ? postingsDepartment.map((postingDepartment) => (
                <li key={postingDepartment.id}>
                  <a
                    href={`/posting/${postingDepartment.id}`}
                    style={styles.bodyLink}
                  >
                    <div style={styles.bodyTitle}>{postingDepartment.name}</div>
                    <div style={styles.bodySubtitle}>
                      {postingDepartment.city}, {postingDepartment.country}
                    </div>
                  </a>
                </li>
              ))
            : postings.map((posting) => (
                <li key={posting.id} data-test="posting">
                  <a href={`/posting/${posting.id}`} style={styles.bodyLink}>
                    <div style={styles.bodyTitle} data-test="posting-name">
                      {posting.name}
                    </div>
                    <div
                      style={styles.bodySubtitle}
                      data-test="posting-location"
                    >
                      {posting.city}, {posting.country}
                    </div>
                  </a>
                </li>
              ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  postings: state.postings.postings,
  departments: state.departments.departments,
  postingsCountry: state.postingsCountry.postingsCountry,
  postingsDepartment: state.postingsDepartment.postingsDepartment,
});

export default connect(mapStateToProps)(Body);
