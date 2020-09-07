import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-bottom.svg';
import SelectItems from '../select-items/select-items.component';
import { connect } from 'react-redux';
import { selectExam } from '../../redux/exam/exam.selector';
import { changePaket } from '../../redux/location/location.actions';
import ButtonSlide from '../../components/button-slide/button-slide.component';
import { withRouter } from 'react-router-dom';
import './select-box.styles.scss';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState(e, exam) {
    const { changeCurrentPaket } = this.props;
    this.setState({
      value: exam
    });
    changeCurrentPaket(exam);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.examId !== prevProps.match.params.examId) {
      const { exam, changeCurrentPaket } = this.props;
      this.setState({
        value: exam.exams[0]
      });

      changeCurrentPaket(exam.exams[0]);
    }
  }

  componentDidMount() {
    const { exam, changeCurrentPaket } = this.props;
    this.setState({
      value: exam.exams[0]
    });

    changeCurrentPaket(exam.exams[0]);
  }

  render() {
    const { exam, history } = this.props;
    const { active, value } = this.state;
    const linkUrl =
      value !== ''
        ? `exam/${value.examType}/${value.slug}/${value.sessions[0]}/1`
        : '';
    return (
      <div className="select-box__box">
        <div className="select-box" onClick={this.handleClick}>
          <span className="select-box__value">{value.examName}</span>
          <ArrowDown
            className={`select-box__svg ${active ? '--active' : ''}`}
          />
          {active ? (
            <SelectItems handleState={this.handleState} items={exam.exams} />
          ) : null}
        </div>
        <div className="select-box__button">
          <ButtonSlide onClick={() => history.push(`/${linkUrl}`)}>
            Ikuti
          </ButtonSlide>
        </div>
      </div>
    );
  }
}
///exam/:examId/:examSlug/:session/:number
const mapStateToProps = (state, ownProps) => ({
  exam: selectExam(ownProps.match.params.examId)(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentPaket: (item) => dispatch(changePaket(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelectBox)
);
