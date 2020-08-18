import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TryoutOverview from '../../components/tryout-overview/tryout-overview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchExamsStart } from '../../redux/exam/exam.actions';
import { selectExam } from '../../redux/exam/exam.selector';

import './tryoutpage.styles.scss';

class TryoutPage extends Component {
  componentDidMount() {
    const { fetchExamsStart } = this.props;
    fetchExamsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.path}`} component={TryoutOverview} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchExamsStart: () => dispatch(fetchExamsStart())
});

const mapStateToProps = createStructuredSelector({
  test: selectExam
});

export default connect(mapStateToProps, mapDispatchToProps)(TryoutPage);
