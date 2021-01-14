/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { history } from "../../helpers/history";
import styles from "../styles/styles.js";
import Loader from "react-loader-spinner";

import { fetchPostingsByID } from "../../store/actions/postingsID";

class PostingDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const { match } = this.props;
    await this.props.dispatch(fetchPostingsByID(match.params.id));
  }

  render() {
    const { postingsID, loading } = this.props;
    return (
      <>
        {loading ? (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        ) : (
          <div>
            <button
              data-test="back"
              style={styles.button}
              onClick={() => {
                history.back();
              }}
            >
              {"<-- back to this list"}
            </button>

            <h2 style={styles.h1} data-test="posting-name">
              {postingsID.name}
            </h2>
            <div style={styles.textBody}>
              <div style={styles.bodySubtitle} data-test="posting-location">
                {postingsID.city}, {postingsID.country}
              </div>

              <h2 style={styles.h2} data-test="job-description">
                Job Description
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: postingsID.jobDescription }}
              />
              <br />
              <h2 style={styles.h2} data-test="job-qualifications">
                Qualifications
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: postingsID.qualifications }}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  postingsID: state.postingsID.postings,
  loading: state.postingsID.loading,
});

export default connect(mapStateToProps)(PostingDetails);
