import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-bottom.svg';
import SelectItems from '../select-items/select-items.component';
import { connect } from 'react-redux';
import { selectExam } from '../../redux/exam/exam.selector';
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

  handleState(e, examName) {
    this.setState({
      value: examName
    });
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    const { exam } = this.props;
    this.setState({
      value: exam.exams[0].examName
    });
  }

  render() {
    const { exam } = this.props;
    const { active, value } = this.state;
    return (
      <div className="select-box__box">
        <div className="select-box" onClick={this.handleClick}>
          <span className="select-box__value">{value}</span>
          <ArrowDown
            className={`select-box__svg ${active ? '--active' : ''}`}
          />
          {active ? (
            <SelectItems handleState={this.handleState} items={exam.exams} />
          ) : null}
        </div>
        <div className="select-box__button">
          <ButtonSlide>Ikuti</ButtonSlide>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  exam: selectExam(ownProps.match.params.examId)(state)
});

export default withRouter(connect(mapStateToProps)(SelectBox));
