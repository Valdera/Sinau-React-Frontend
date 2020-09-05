import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TryoutOverview from '../../components/tryout-overview/tryout-overview.component';
import { connect } from 'react-redux';
import { fetchExamsStart } from '../../redux/exam/exam.actions';

import './tryoutpage.styles.scss';

class TryoutPage extends Component {
  async componentDidMount() {
    const { fetchExamsStart } = this.props;
    await fetchExamsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.path}`} render={() => <TryoutOverview />} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchExamsStart: () => dispatch(fetchExamsStart())
});

export default connect(null, mapDispatchToProps)(TryoutPage);
