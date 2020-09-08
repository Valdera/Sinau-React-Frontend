import React, { Component } from 'react';
import { selectExamItems } from '../../redux/exam/exam.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeExamsToArray } from '../../database/utils/data.utils';
import ButtonBlock from '../button-block/button-block.component';

import './exam-seeker.styles.scss';

class ExamSeeker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      exam: ''
    };
    this.handleActive = this.handleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { exams } = this.props;
    const examArr = changeExamsToArray(exams);
    this.setState({
      exam: examArr[0]
    });
  }

  handleActive() {
    this.setState({
      active: !this.state.active
    });
  }

  handleClick(e, exam) {
    this.setState({
      active: !this.state.active,
      exam: exam
    });
  }

  render() {
    const { exam, active } = this.state;
    const { exams } = this.props;
    const examArr = changeExamsToArray(exams);

    return (
      <div className="examseeker">
        <div className="examseeker__select" onClick={this.handleActive}>
          {exam.examName}
          {active ? (
            <div className="examseeker__box">
              {examArr.map((exam) => (
                <div
                  key={`examseeker-${exam.examName}`}
                  className="examseeker__item"
                  onClick={(e) => this.handleClick(e, exam)}>
                  {exam.examName}
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="examseeker__info">
          <div className="examseeker__info-item">
            Exam Name : {exam.examName}
          </div>
          <div className="examseeker__info-item">
            Duration : {exam.duration}
          </div>
          <div className="examseeker__info-item">Price : {exam.price}</div>
          <div className="examseeker__info-item">Major : {exam.major}</div>
          <div className="examseeker__info-item">Year : {exam.year}</div>
          <div className="examseeker__info-item">
            Exam Type : {exam.examType}
          </div>
          <div className="examseeker__info-item">
            Exam Session : {exam.examSession}
          </div>
          <div className="examseeker__info-item">Exam Id: {exam._id}</div>
          {exam ? (
            <div className="examseeker__info-item">
              Total Question: {exam.questions.length}
            </div>
          ) : (
            ''
          )}
          {exam ? (
            <div className="examseeker__info-item">
              Total Sessions: {exam.sessions.length}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="examseeker__button">
          <ButtonBlock>Delete Exam</ButtonBlock>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  exams: selectExamItems
});

export default connect(mapStateToProps)(ExamSeeker);
