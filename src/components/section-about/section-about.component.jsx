import React from 'react';
import ToggleTab from '../../components/toggle-tab/toggle-tab.component';
import { selectExam } from '../../redux/exam/exam.selector';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './section-about.styles.scss';

const SectionAbout = ({ exam }) => {
  console.log(exam);
  return (
    <div className="section-about__desc">
      <div className="section-about__text">
        <div className="section-about__text--main">
          <h1>TRY OUT SIMAK UI</h1>
        </div>
        <div className="section-about__text--sub">
          <p>By Sinau Edu Team</p>
        </div>
      </div>
      <div className="section-about__tabs">
        <ToggleTab />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  exam: selectExam(ownProps.match.params.examId)(state)
});

export default withRouter(connect(mapStateToProps)(SectionAbout));
