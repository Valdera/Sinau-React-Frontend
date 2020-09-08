import React, { Component } from 'react';
import ExamMakerItem from '../exam-maker-item/exam-maker-item.component';
import { connect } from 'react-redux';
import ButtonBlock from '../button-block/button-block.component';
import './exam-maker.styles.scss';
import ExamSeekerContainer from '../exam-seeker/exam-seeker.container';
import {
  fetchExamsStart,
  createExamStart
} from '../../redux/exam/exam.actions';

class ExamMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examName: '',
      duration: '',
      price: '',
      major: '',
      year: '',
      examSession: '',
      examType: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { fetchExamsStart } = this.props;
    await fetchExamsStart();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const { createExamStart } = this.props;
    const {
      examName,
      duration,
      price,
      major,
      year,
      examSession,
      examType
    } = this.state;
    const data = {
      examName,
      duration,
      price,
      major,
      year,
      examSession,
      examType
    };
    await createExamStart(data);
    this.setState({
      examName: '',
      duration: '',
      price: '',
      major: '',
      year: '',
      examSession: '',
      examType: ''
    });
  }

  render() {
    const {
      examName,
      duration,
      price,
      major,
      year,
      examSession,
      examType
    } = this.state;
    const { handleChange } = this;
    return (
      <div className="exammaker">
        <div className="exammaker__make">
          <form className="exammaker__form">
            <h1 className="exammaker__make-title">Exam Maker 1.0</h1>
            <ExamMakerItem
              label="Exam Name (UPPERCASE): "
              typeData="examName"
              handleChange={handleChange}
              data={examName}
            />
            <ExamMakerItem
              label="Duration (e.g 120 32 43) in minutes: "
              typeData="duration"
              handleChange={handleChange}
              data={duration}
            />
            <ExamMakerItem
              label="Price (e.g 4000 3000 0) in rupiah: "
              typeData="price"
              handleChange={handleChange}
              data={price}
            />
            <ExamMakerItem
              label="Major (only ipa or ips) lowercase: "
              typeData="major"
              handleChange={handleChange}
              data={major}
            />
            <ExamMakerItem
              label="Year (2019 2020): "
              typeData="year"
              handleChange={handleChange}
              data={year}
            />
            <ExamMakerItem
              label="Exam Session (kemampuan ipa kemampuan verbal dll) lowercase: "
              typeData="examSession"
              handleChange={handleChange}
              data={examSession}
            />
            <ExamMakerItem
              label="Exam Type (only utbk simak umugm) lowercase : "
              typeData="examType"
              handleChange={handleChange}
              data={examType}
            />
            <div className="exammaker__button" onClick={this.handleSubmit}>
              <ButtonBlock>Submit Exam</ButtonBlock>
            </div>
          </form>
        </div>
        <div className="exammaker__seeker">
          <div className="exammaker__seeker-form">
            <h1 className="exammaker__make-title">Exam Seeker 1.0</h1>
            <ExamSeekerContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchExamsStart: () => dispatch(fetchExamsStart()),
  createExamStart: (data) => dispatch(createExamStart(data))
});

export default connect(null, mapDispatchToProps)(ExamMaker);
